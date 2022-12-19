import React, { useState } from "react";
import '../../App.css'
/*
import { LogIn } from "../LogIn";
import { Register } from "../Register";
*/

function SignUp() {

  /*
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  */

  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

  return (
    <div className = "SignUp">
      <div className = "registration"> 
        <h1>Registration</h1>
        <label>Username</label>
        <input type = "text" 
        onChange = {(e) => {
          setUsernameReg(e.target.value);
        }}/>
        <label> Password </label>
        <input type = "text" 
        onChange = {(e) => {
          setPasswordReg(e.target.value);
        }}/>
        <button> Register </button>
      </div>
      <div className = "login"> 
        <h1>Log In</h1>
        <input type = "text" placeholder = "Username" />
        <input type = "text" placeholder = "Password" />
        <button> Log In </button>
      </div>
    </div>


  
    /*
    <div className="SignUp">
      {
        currentForm === "login" ? <LogIn onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    */
    
  );
}

export default SignUp;