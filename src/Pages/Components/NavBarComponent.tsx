import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
import '../styles.css'
import Logo from '../../Images/Logo.png'

const StyledNavBar = styled.div`
.color-nav{
    background-color: red;
}
`
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
            <Nav.Link ><Button variant="outline-light" size="sm"><strong>LOGIN</strong></Button></Nav.Link>
        </Nav.Item>

  </Nav>
    );
}

export default NavBar