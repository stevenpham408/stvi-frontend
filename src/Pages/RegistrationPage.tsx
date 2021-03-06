import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import isEmail from 'validator/lib/isEmail'
import axios from 'axios'
import { displayAlert } from '../helpers'
import DanceImg from '../Images/Dancing.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

// Initial state for the registration form, freeze it to prevent any changes from occurring
const initialFormData = Object.freeze({
    email : "",
    username : "",
    password : "",
})

const config = Object.freeze({
    withCredentials: true,  
    headers: {
      crossDomain: true, 
      'Access-Control-Allow-Origin' : 'http://localhost:4040',
    },
});

/**
 * Functional component that represents the entire Registration page
 */
const RegistrationPage: React.FC = () => {
    document.body.style.background = "#f2f2f2";

    // Form field states 
    const [formData, setFormData] = React.useState(initialFormData);
    const [matchingPw, setMatchingPw] = React.useState('');

    // Alert states
    const [alertVariant, setAlertVariant] = React.useState("");
    const [alertVisibility, showAlert] = React.useState(false);
    const [alertMsg, setAlertMsg] = React.useState("");

    /**
     * Function expression for updating the state of the respective fields on any change  
     */
    const handleChange = (e : any) => {
        setFormData({
            ...formData,

            /* Map each <input> names to the corresponding property of formData & update its state/value 
             * based on the value of the <input>
             */
            [e.target.name] : e.target.value
        })
    };

    /**
     * Function expression for handling form data after user submits the form
     */
    const handleSubmit = (e : any) => {
        // Prevent the page from refreshing
        e.preventDefault();
        console.log(formData);

        // Perform various input validation checks
        let isEmpty = Object.values(formData).some(element => element === "");
        
        // Check if any input fields are left blank
        if(isEmpty || matchingPw === ""){
            setAlertMsg("Fill in the missing field(s).");
            setAlertVariant("danger");
            displayAlert(showAlert, 4000);
            return;
        }

        // Check if user entered a valid email
        if(!isEmail(formData["email"])){
            setAlertMsg("You entered an invalid email. Please enter a valid email and try again.");
            setAlertVariant("danger");
            displayAlert(showAlert, 4000);
            return;
        }

        // Check if both password fields match each other
        if (formData['password'] !== matchingPw){
            setAlertMsg("The passwords you entered do not match each other. Please double-check and try again.");
            setAlertVariant("danger");
            displayAlert(showAlert, 4000);
            return;
        }

        // Make a post request to the API 
        axios.post("http://localhost:4040/registration", formData, config)
            .then(response => {
                console.log(response);
                // Reset the state/value of the form fields 
                setFormData(initialFormData);
                setMatchingPw("");
                setAlertMsg("You have successfully created an account!")
                displayAlert(showAlert, 5000);
            })
            .catch(error => {
                const errorMsg: string = error.response["data"];
                setAlertMsg(errorMsg);
                setAlertVariant("danger");
                if(errorMsg === "Email is already taken."){ displayAlert(showAlert, 4000) }
                else if(errorMsg === "Username is already taken."){ displayAlert(showAlert, 4000) }
            });
    }

    return(
    <div className="registration-page">
        <Alert className="fixed-top" variant={alertVariant} show={alertVisibility}> <span className="alert-msg"> {alertMsg} </span> </Alert>
        <div className="registration-main-container">
            <img alt="dancing_img" className="registration-img" src={DanceImg} height="350" draggable="false"/>
            <div className="registration-sub-container">
                <div className='registration-text'>
                    <h1>Sign up</h1>
                    <h2>It's quick and easy with stvi</h2>
                </div>
                
                <div className='registration-form-container'>
                    <Form>
                        <div className='form-group'>
                            <label> Email </label>
                            <input type="email" 
                            name="email" 
                            value={formData["email"]}
                            className="form-control" 
                            id="registrationInputEmail" 
                            placeholder="Enter email" 
                            onChange={handleChange}/>
                        </div>

                        <div className='form-group'>
                            <label> Username </label>
                            <input type="text" 
                            name="username" 
                            value={formData["username"]}
                            className="form-control" 
                            id="registrationInputUsername" 
                            placeholder="Enter desired username" 
                            onChange={handleChange}/>
                        </div>

                        <div className='form-group'>
                            <label> Password </label>
                            <input type="password" 
                            name="password" 
                            value={formData["password"]}
                            className="form-control" 
                            id="registrationInputPw" 
                            placeholder="Enter password" 
                            onChange={handleChange}/>
                        </div>

                        <div className='form-group'>
                            <label> Confirm Password </label>
                            <input type="password" 
                            name="matchingPassword" 
                            value={matchingPw}
                            className="form-control" 
                            id="registrationConfirmPw" 
                            placeholder="Re-enter password" 
                            onChange={(e) => {setMatchingPw(e.target.value)}}/>
                        </div>
                        <Button type="submit" className="btn btn-flat" id="register-button" onClick={handleSubmit}>Create an Account</Button>
                    </Form> 
                </div>                 
            </div>
        </div>
    </div>
    );
};

export default RegistrationPage;