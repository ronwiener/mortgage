import React,{ Component } from 'react';
import './Signin.css';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: true,
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    loginToggle = (event) => {
        event.preventDefault();
        const login = this.state.login;
        this.setState({
            login: !login,
            username: '',
            password: ''
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const url= this.state.login ? 'http://localhost:3000/api/login' :
        'http://localhost:3000/api/user' 

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => response.json())
        .then((data) => this.props.setToken(data.sessionToken)
    )
}


    render() {
        let title = this.state.login ? 'Login' : 'SignUp';
        
        return (
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <h1 id="h1">{title}</h1>
              </FormGroup>
              <FormGroup>
                <Label id="label" htmlFor="username"></Label>
                <Input type="text" id="username" placeholder="username" onChange={this.handleChange} value={this.state.username} />
                </FormGroup>
                <FormGroup>
                <Label id="label" htmlFor="password"></Label><br />
                <Input type="password" id="password" placeholder="password" required onChange={this.handleChange} value={this.state.password} />
                </FormGroup>
                <FormGroup>
                {this.state.login ? null : <div></div>}
                </FormGroup><br />
                <FormGroup>
                <Button id="buttonToggle"  onClick={this.loginToggle}>LogIn</Button>
                <Button id="buttonToggleOne"  onClick={this.loginToggle}>SignUp</Button><br />
                <Button id="buttonSubmit" type="submit">Submit</Button>
                </FormGroup>
            </Form>
        )
    }
}

export default Auth;