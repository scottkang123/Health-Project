import React, { useState } from "react";
import Axios from 'axios';
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

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const register = ()=> {

    Axios.post('http://localhost:3001/register', {
      username: usernameReg, 
      password: passwordReg,
    }).then((response) =>{
      console.log(response);
    });

  }

  const login = ()=> {

    Axios.post('http://localhost:3001/login', {
      username: username, 
      password: password,
    }).then((response) =>{
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].username)
      }
    });

  }

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
        <button onClick = {register}> Register </button>
      </div>
      <div className = "login"> 
        <h1>Log In</h1>
        <input type = "text" placeholder = "Username"
        onChange = {(e) => {
          setUsername(e.target.value);
        }}/>
        <input type = "text" placeholder = "Password"
        onChange = {(e) => {
          setPassword(e.target.value);
        }} />
        <button onClick = {login}> Log In </button>
      </div>

      <h1>{loginStatus}</h1>

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