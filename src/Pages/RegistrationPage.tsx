import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './Components/NavBarComponent'
import isEmail from 'validator/lib/isEmail'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

// Initial state for the registration form, freeze it to prevent any changes from occurring
const initialFormData = Object.freeze({
    email : "",
    username : "",
    password : "",
})

/**
 * Functional component that represents the entire Registration page
 */
const RegistrationPage: React.FC = () => {
    const [formData, setFormData] = React.useState(initialFormData);
    const [matchingPw, setMatchingPw] = React.useState('');

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
            alert("Fill in the missing fields.");
            return;
        }

        // Check if user entered a valid email
        if(!isEmail(formData["email"])){
            alert("You entered a non-valid email.");
            return;
        }

        // Check if both password fields match each other
        if (formData['password'] !== matchingPw){
            alert("passwords don't match");
            return;
        }

        // Make a post request to the API 
        axios.post("http://localhost:4040/registration", formData)
            .then(response => {
                console.log(response);
                // NOTE: Need to use Bootstrap alert

                // Reset the state/value of the form fields 
                setFormData(initialFormData);
                setMatchingPw("");
                alert("You have successfully created an account!")
            })
            .catch(error => {
                // NOTE: Need to use Bootstrap alert
                alert("Something went wrong. Please try again later.");
                console.log(error);
            })
    }
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
                placeholder="Username" 
                onChange={handleChange}/>
            </div>

            <div className='form-group'>
                <label> Password </label>
                <input type="password" 
                name="password" 
                value={formData["password"]}
                className="form-control" 
                id="registrationInputPw" 
                placeholder="Password" 
                onChange={handleChange}/>
            </div>

            <div className='form-group'>
                <label> Confirm Password </label>
                <input type="password" 
                name="matchingPassword" 
                value={matchingPw}
                className="form-control" 
                id="registrationConfirmPw" 
                placeholder="Confirm password" 
                onChange={(e) => {setMatchingPw(e.target.value)}}/>
            </div>
            
            <Button type="submit" className="btn btn-flat" id="register-button" onClick={handleSubmit}>Submit</Button>
        </Form> 
    </div> 
    </>
    );
};

export default RegistrationPage;