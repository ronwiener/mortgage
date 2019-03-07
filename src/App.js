import React, { Component } from 'react';
import Sitebar from './Home/Navbar';
import BoxHero from './Home/BoxHero';
import Landing from './Home/Landing';
import './App.css';
import { BrowserRouter as Router,
Route,
Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    if(token && !this.state.sessionToken)
    {this.setState({ sessionToken: token });
   }
  }

  setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token });
  }

  logout = () => {
    this.setState({ sessionToken: ''});
    localStorage.clear();
  }

  protectedViews = () => {
    if(this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Switch>
          <Route path= '/' exact>
            <Landing sessionToken={this.state.sessionToken}/>
          </Route>
        </Switch>
      )
    } else {
      return (
        <Route path='/Auth'>
          <BoxHero setToken= {this.setSessionState}/>
        </Route>
      )
    }
  }
  render() {
    return (
      <Router>
       <div>
         <Sitebar clickLogout=
         {this.logout}/>
         {this.protectedViews()}        
       </div>
      </Router>
    );
  }
}

export default App;
