import React from 'react'
import Typist from 'react-typist'
import NavBar from './Components/NavBarComponent'
import '../../node_modules/react-typist/dist/Typist.css'
import Chain_Img from '../Images/BrokenChain.svg'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import API_Img from '../Images/API Development.svg'
import Monitor_Img from '../Images/Monitor with Lock.svg'
import UI_Img from '../Images/UI Design.svg'
import './styles.css'

const MyTypist: React.FC = () => {
    return(
            <Typist className='typist'>
               shorter.
               <Typist.Delay ms={500} />
               <br/>
               sleeker.
               <Typist.Delay ms={500} />
               <br/>
               smarter.
               <Typist.Delay ms={500} />
               <br/>
               stvi.
            </Typist>
    );
};

const GetStarted: React.FC = () => {
    return(
        <div className='getStarted'>
            <img alt="chain" id="chain"src={Chain_Img}></img>
            <div>
                <h1 id='hook'> 
                    <strong> Shorten your long, unsightly URLs with a click of a button. </strong> 
                </h1>
                <p id='introduction'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar sodales massa id aliquam. Morbi lectus elit, 
                eleifend quis orci sed, finibus aliquam felis. Donec sagittis aliquam lectus, nec mattis urna sagittis vitae. Morbi 
                pellentesque bibendum vehicula. Vivamus augue ligula, faucibus feugiat enim quis, cursus sollicitudin ex. Vestibulum 
                ante ipsum.
                </p>
                <Button id="Register" variant="flat" size="lg"><a className="registerHref" href="/register">Register</a></Button>
            </div>
        </div>

    );
};

const InfoImages: React.FC = () => {
    return(             
            <div className="images">
                <div className="imgContainer">
                    <img alt="API_Pic" src={API_Img} width="80px" height="80px"/>
                    <div className="caption">Communicates with a RESTful API backend written in Java with Spring Boot</div>
                </div>

                <div className="imgContainer">
                    <img alt="Monitor_Pic" src={Monitor_Img} width="80px" height="80px"/> 
                    <div className="caption">Handles user information securely with modern password encryption 
                                             practices with Spring Security and MySQL</div>
                </div>
                
                <div className="imgContainer">
                    <img alt="UI_Pic" src={UI_Img} width="80px" height="80px"/> 
                    <div className="caption">Manages user session state using cookies stored in-memory through Spring Security</div>
                 </div> 
            </div>
    );
}
const LandingPage: React.FC = () => {

    return(
        <div>
            <NavBar/>
            <div className='container'>
                <GetStarted/>
                <MyTypist/>
            </div>
            <InfoImages/>
        </div>
    );
}

export default LandingPage;