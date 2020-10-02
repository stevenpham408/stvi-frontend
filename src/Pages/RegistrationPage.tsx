import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavBar from './Components/NavBarComponent'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'

const initialFormData = Object.freeze({
    email : "",
    username : "",
    password : "",
})
const RegistrationPage: React.FC = () => {
    const [formData, setFormData] = React.useState(initialFormData);
    const [matchingPw, setMatchingPw] = React.useState('');
    const handleChange = (e : any) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e : any) => {
        e.preventDefault();
        console.log(formData);
        let isEmpty = Object.values(formData).some(element => element === "");
        if(isEmpty || matchingPw === ""){
            alert("Fill in the missing fields.");
            return;
        }

        if (formData['password'] != matchingPw){
            alert("passwords don't match");
            return;
        }

        axios.post("http://localhost:4040/registration", formData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
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
    <div className='form-container'>
        <Form>
            <div className='form-group'>
                <label> Email </label>
                <input type="email" name="email" className="form-control" id="registrationInputEmail" placeholder="Enter email" onChange={handleChange}/>
            </div>

            <div className='form-group'>
                <label> Username </label>
                <input type="text" name="username" className="form-control" id="registrationInputUsername" placeholder="Username" onChange={handleChange}/>
            </div>

            <div className='form-group'>
                <label> Password </label>
                <input type="password" name="password" className="form-control" id="registrationInputPw" placeholder="Password" onChange={handleChange}/>
            </div>

            <div className='form-group'>
                <label> Confirm Password </label>
                <input type="password" name="matchingPassword" className="form-control" id="registrationConfirmPw" placeholder="Confirm password" onChange={(e) => {setMatchingPw(e.target.value)}}/>
            </div>
            
            <Button type="submit" className="btn-lg btn-flat" onClick={handleSubmit}>Submit</Button>
        </Form> 
    </div> 
    </>
    );
};

export default RegistrationPage;
