import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './Components/NavBarComponent'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const RegistrationPage: React.FC = () => {
    return(
    <>
    <NavBar/>
    <div className='registration-text'>
        <h1>
            Sign up
        </h1>
        <h2>
            It's quick and easy with stvi    
        </h2>
    </div>
    <div className='form-container'>
        <Form>
            <div className='form-group'>
                <label> Email </label>
                <input type="email" name='email' className="form-control" id="registrationInputEmail" placeholder="Enter email"/>
            </div>

            <div className='form-group'>
                <label> Username </label>
                <input type="text" className="form-control" id="registrationInputUsername" placeholder="Username"/>
            </div>

            <div className='form-group'>
                <label> Password </label>
                <input type="password" className="form-control" id="registrationInputPw" placeholder="Password"/>
            </div>

            <div className='form-group'>
                <label> Confirm Password </label>
                <input type="password" className="form-control" id="registrationConfirmPw" placeholder="Confirm password"/>
            </div>
            
            <Button type="submit" className="btn-lg btn-flat">Submit</Button>
        </Form> 
    </div>
    </>
    );
};

export default RegistrationPage;
