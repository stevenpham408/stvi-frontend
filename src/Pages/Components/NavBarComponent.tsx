import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/Logo.png'


const NavBarStyles = styled.div`
    .NavBar{
        overflow: hidden;   
        background-color: black;
        width: 100%;
        height: 3.4375rem;
    }

    .NavBar a{
        letter-spacing: 2.5px;
        color: white;
        float: right;
        padding: 16px 16px; 
        text-align: center;
        text-decoration: none;
    }

    .NavBar .rightMost {
        margin-right: 62px;
    }

    .NavBar .rightMost a:hover {
        background-color: #6F24CB;
        color: white;
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
                      <div className='rightMost'>
                          <a href="login"> Login </a>
                          <a href="#about"> About </a>
                       </div>
                      <a id="Logo" href="/"> <img src={Logo}/> </a>
                  </div>
        </NavBarStyles>
    );
}

export default NavBar