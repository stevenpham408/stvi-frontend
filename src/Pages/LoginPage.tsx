import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './Components/NavBarComponent'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
const initialLoginData = Object.freeze({
    username : "",
    password : ""
});

const LoginPage: React.FC = () => {
    const [loginData, setLoginData] = React.useState(initialLoginData);
    const handleChange = (e : any) => {
        setLoginData({
            ...loginData,
            [e.target.name] : e.target.value
        });
    };

    const handleLogin = (e : any) => {
        let isEmpty = Object.values(loginData).some(element => element === "");
        if(isEmpty){
            alert("Fill in the missing fields.");
            return;
        }

        axios.post("http://localhost:4040/login", loginData)
            .then(response => {
                console.log(response);
                console.log("Login successful.");
            })
            .catch(error => {
                console.log(error);
                console.log("Something happened while logging in.")
            })

    }
    return (
        <>
            <NavBar/>
            <div className="main-login-container">
                <div className = "decorative-text">
                    <h1 className='standard-text'> Let's get to
                        <span className='colored-text'> work. </span> 
                    </h1>
                </div>
                
                <div className='login-form-container'>
                    <div className='login-text'>
                        <h1>
                            Log in to stvi
                        </h1>
                        <h2>
                            Good to see you again
                        </h2>
                    </div>

                    <Form>
                        <div className='form-group'>
                            <label> Username </label>
                            <input type="text" 
                            name="username" 
                            value={loginData["username"]}
                            className="form-control" 
                            id="registrationInputUsername" 
                            placeholder="Username" 
                            onChange={handleChange}
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
                            onChange={handleChange}
                            />
                        </div>

                        <Button type="submit" className="btn-lg btn-flat" id="login-button" onClick={handleLogin}>Log in</Button>
                    </Form> 
                </div> 
            </div>
        </>
    );
};

export default LoginPage