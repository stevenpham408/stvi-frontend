import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './Components/NavBarComponent'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const LoginPage: React.FC = () => {
    return (
        <>
        <NavBar/>
        <div className='login-text'>
            <h1>
                Log in to stvi
            </h1>
            <h2>
                Good to see you again
            </h2>
        </div>
        <div className='form-container'>
            <Form>

                <div className='form-group'>
                    <label> Username </label>
                    <input type="text" 
                    name="username" 
                    // value={formData["username"]}
                    className="form-control" 
                    id="registrationInputUsername" 
                    placeholder="Username" 
                    // onChange={handleChange}
                    />
                </div>
    
                <div className='form-group'>
                    <label> Password </label>
                    <input type="password" 
                    // name="password" 
                    // value={formData["password"]}
                    className="form-control" 
                    id="registrationInputPw" 
                    placeholder="Password" 
                    // onChange={handleChange}
                    />
                </div>
    
                
                <Button type="submit" className="btn-lg btn-flat">Log in</Button>
            </Form> 
        </div> 
        </>
    );
};