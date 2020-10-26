import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import '../styles.css'
import Logo from '../../Images/Logo.png'

const NavBar : React.FC = () => {

    return(
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
                <Navbar.Brand><img alt="stvi_logo" className="navbar-logo" src={Logo} height="60px"/></Navbar.Brand>
        </Nav.Item>
        
        <Nav.Item className="navbar-reg-item">
            <Nav.Link eventKey="link-1">ABOUT</Nav.Link>
        </Nav.Item>
        <Nav.Item className="navbar-button-item">
            <Nav.Link >
                <Link to={"/login"}>
                    <Button variant="outline-light" size="sm" > <strong>LOGIN</strong> </Button>
                </Link>
            </Nav.Link>
        </Nav.Item>
  </Nav>
    );
}

export default NavBar