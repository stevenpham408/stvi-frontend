import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import axios from 'axios'
import qs from 'query-string'

import {useHistory, Redirect} from "react-router-dom";
import { displayAlert } from "../helpers"
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

// Initial state for the login form, freeze it to prevent any changes from occurring
const initialLoginData = Object.freeze({
    username : "",
    password : ""
});

const config = Object.freeze({
    withCredentials: true,  
    headers: {
      crossDomain: true, 
      'Access-Control-Allow-Origin' : 'http://localhost:4040',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
});

/**
 * Functional component that represents the entire Login page
 */
const LoginPage: React.FC = () => {
    document.body.style.background = "#f2f2f2";
    const history = useHistory();
    const [loginData, setLoginData] = React.useState(initialLoginData);
    const [isAuth, setAuth] = React.useState(false);

    // Alert states
    const [alertVisibility, showAlert] = React.useState(false);
    const [alertMsg, setAlertMsg] = React.useState("");

    React.useEffect(() => {
        const fetchAuth = async () => {
            const response = await axios.get("http://localhost:4040/user/auth", {withCredentials: true})
            if(response.data === true){
                setAuth(true);
            }
        }
        fetchAuth();
    }, [])

    const handleFieldChange = (e : any) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        });
    };

    /**
     * Function expression for handling form data after user submits the form
     */
    const handleLogin = (e : any) => {
        e.preventDefault();
        
        // Check for empty fields before making a request to the API
        let isEmpty = Object.values(loginData).some(element => element === "");
        if(isEmpty){
            setAlertMsg("Fill in the missing field(s) and try again.")
            displayAlert(showAlert, 5000);
            return;
        }

        axios.defaults.withCredentials = true;
        // Make a post request to the API using axios
        axios.post("http://localhost:4040/loginprocess", qs.stringify(loginData), config)
            .then(response => {
                // If the response is OK, then we can redirect the newly authenticated user to the user page
                if(response.status === 200){
                    history.push('/userpage');
                }
                else{
                    setAlertMsg("Login failed. Please double-check your credentials and try again.");
                    displayAlert(showAlert, 5000);
                }
            })
            .catch(error => {
                setAlertMsg("Catch");
                displayAlert(showAlert, 5000);
            });
    }

    if(isAuth === true){
        return (
            <Redirect to={{pathname: "/userpage"}}/>
        )
    }
    return (
        <div className="Login-Page">
        <Alert role="alert" className="fixed-top" variant="danger" show={alertVisibility}>{alertMsg}</Alert> 
            <div className="login-page-container">
                <div className = "decorative-text">
                    <h1 className='standard-text'> Let's get to
                        <span className='colored-text'> work. </span> 
                    </h1>
                </div>
                
                <div className='login-form-main-container'>
                    <div className='login-text'>
                        <h1>
                            Welcome Back!
                        </h1>
                        <h2> 
                            Good to see you again
                        </h2>
                    </div>

                    <Form className='registration-form-container login-form-container'>
                        <div className='form-group'>
                            <label> Username </label>
                            <input type="text" 
                            name="username" 
                            value={loginData["username"]}
                            className="form-control" 
                            id="registrationInputUsername" 
                            placeholder="Username" 
                            onChange={handleFieldChange}
                            />
                        </div>
            
                        <div className='form-group'>
                            <label> Password </label>
                            <input type="password" 
                            name="password" 
                            value={loginData["password"]}
                            className="form-control" 
                            id="registrationInputPw" 
                            placeholder="Password" 
                            onChange={handleFieldChange}
                            />
                        </div>
                        <Button type="submit" className="btn-lg btn-flat login-button" id="login-button" onClick={handleLogin}>Log in</Button>
                    </Form> 
                </div> 
            </div>
        </div>
    )
};

export default LoginPage