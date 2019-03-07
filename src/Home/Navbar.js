import React, { Component } from 'react';
import { Navbar, NavItem, NavbarBrand, Button } from 'reactstrap';
import './Navbar.css';


class Sitebar extends Component {
    

    render() {
        return (
            <div>
                <Navbar id="navbar" >
                    <NavbarBrand id="brand" className="text">Mortgage App</NavbarBrand>
                    <NavItem>
                                <Button onClick={() => this.props.clickLogout()} id="logButton">Logout</Button>
                            </NavItem>
                </Navbar>
            </div>
        )
    }
}

export default Sitebar;