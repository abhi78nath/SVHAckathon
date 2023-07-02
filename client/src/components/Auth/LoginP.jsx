import React from "react";
import "./login.css";

import { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const submithandler = async () => {
    console.log(name, email, password, role);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://server2-wt2y.onrender.com/candidate/createuser",
        {
          name,
          email,
          password,
          role,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  };
  //  handle submiters end

  const submithandler2 = async () => {
    console.log(name, email, password, role);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://server2-wt2y.onrender.com/candidate/login",
        {
          email,
          password,
        },
        config
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      throw error;
    }
  };

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="auth">
      <form id="signupForm">
        <div className="signup">
          <h2>Sign Up</h2>
          <div className="Name_label">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required/>
          </div>

          <div className="email_label">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password_label">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="role_label">
            <div
              className="recruiter"
              onClick={() => handleRoleSelection("recruiter")}
            >
              Recruiter
            </div>
            <div
              className="candidate"
              onClick={() => handleRoleSelection("recruiter")}
            >
              Candidate
            </div>
          </div>
        </div>
      </form>

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

          <div className="role_label">
            <div className="recruiter">Recruiter</div>
            <div className="candidate">Candidate</div>
          </div>
        </div>
      </form>

      <div className="btnsubmit">
        <button
          type="submit"
          className="profileDataBtn"
          onClick={() => {
            if (name) {
                submithandler();
                document.getElementById("signupForm").submit();
            }
            else{
                submithandler2();
                document.getElementById("loginForm").submit();
            }
          }}
        >
          Submit &rarr;
        </button>
      </div>
    </div>
  );
}

export default Login;
