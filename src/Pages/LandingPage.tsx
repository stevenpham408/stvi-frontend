import React from 'react'
import NavBar from './Components/NavBarComponent'
import '../../node_modules/react-typist/dist/Typist.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import API_Img from '../Images/API Development.svg'
import Monitor_Img from '../Images/Monitor with Lock.svg'
import UI_Img from '../Images/UI Design.svg'
import './styles.css'
import Office_Img from '../Images/Office.svg'
import { Link } from 'react-router-dom'
const GetStarted: React.FC = () => {
    React.useEffect(() => {
        document.body.style.background = "#fffff";
    }, [])
    return(
        <div className='container'>
            <div className='getStarted'>
                <div>
                    <h1 id='hook'> 
                        <strong> Ugly URL? Cut the fluff. </strong> 
                    </h1>
                    <p className='description'>
                    Stvi is a URL shortener that will help you grow and nurture your brand.
                    </p>
                    
                    <Link to={"/register"}><Button className="register-btn" variant="flat" size="lg">Register for Free</Button></Link>
                    <p className='member-already'>Already a member? <Link to={"/login"}> Sign in </Link></p>
                </div>
            </div>
            <img className="office_img" alt="Office_Pic" src={Office_Img} draggable="false"/> 
        </div>
    );
};

const InfoImages: React.FC = () => {
    return(             
        <div>
            <p className="what-else">—What else does this web app do?—</p>
                <div className="images">
                    <div className="imgContainer">
                        <img alt="API_Pic" src={API_Img} width="80px" height="80px" draggable="false"/>
                        <div className="caption">Communicates with a RESTful API backend written in Java with Spring Boot</div>
                    </div>

                    <div className="imgContainer">
                        <img alt="Monitor_Pic" src={Monitor_Img} width="80px" height="80px" draggable="false"/> 
                        <div className="caption">Handles user information securely with modern password encryption 
                                                practices with Spring Security and MySQL</div>
                    </div>
                    
                    <div className="imgContainer">
                        <img alt="UI_Pic" src={UI_Img} width="80px" height="80px" draggable="false"/> 
                        <div className="caption">Manages user session state using cookies stored in-memory through Spring Security</div>
                    </div> 
                </div>
        </div>
    );
}
const LandingPage: React.FC = () => {

    return(
        <div className='master'>
            <NavBar/>
            <div className='half-block-decoration'>
                <GetStarted/>
            </div>
            <InfoImages/>
        </div>
    );
}

export default LandingPage;