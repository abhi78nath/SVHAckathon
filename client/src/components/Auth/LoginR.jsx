import React from 'react'
import "./login.css";

import { useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function LoginR() {
  const navigate = useNavigate();
 const [email,setEmail]=useState();
 const [password,setPassword]=useState();

 const submithandler=async()=>{
    console.log(email,password);

    try{
        const config={
            headers:{
                "Content-Type": "application/json",
            },
        };

        const {data}=await axios.post("https://server2-wt2y.onrender.com/employer/login",{
            email,
            password,
        },config);

        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate('/results');
    } catch(error) {
    throw(error);
 }
 };
//  handle submiters end

  return (
    <div className='auth'>  
<form id="loginForm">
        <div className="login">
          <h2>Sign In</h2>

          <div className="email_label">
            <label htmlFor="email2">E-Mail</label>
            <input type="email" id="email2" name="email2" onChange={(e) => setEmail(e.target.value)} required/>{" "}
          </div>

          <div className="password_label">
            <label htmlFor="password2">Password</label>
            <input type="password" id="password2" name="password2" onChange={(e) => setPassword(e.target.value)} required />{" "}
          </div>
        </div>
      </form>
            <div className="btnsubmit">
            <button type="submit" className="profileDataBtn" onClick={submithandler} form="loginForm" >
                     Submit &rarr;
            </button>
      </div>
            </div>
            
  )
}

export default LoginR;