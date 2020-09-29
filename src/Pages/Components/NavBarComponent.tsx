import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/Logo.png'

const NavBarStyles = styled.div`
    .NavBar{
        background-color: black;
        width: 100%;
        height: 55px;
    }

    .NavBar a{
        color: white;
        float: right;
        padding: 15px; 
        padding-right: 40px;
        text-align: center;
        text-decoration: none;
    }
       
    #Logo {
        float: left;
        padding: 0;
        margin-left: 2%;
        margin-top: 2px;

        img {
            width: 78px;
            length: 55px;
        }
    }
    
`

const NavBar : React.FC = () => {
    return(
            <NavBarStyles>
                  <div className='NavBar'>
                      <a id="Logo" href="#landing"> <img src={Logo}/> </a>
                      <a href="#about"> About </a>
                      <a href="#login"> Login </a>
                  </div>
  
        </NavBarStyles>

    );

}

export default NavBar