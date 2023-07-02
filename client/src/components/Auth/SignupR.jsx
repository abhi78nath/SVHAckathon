import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function SignupR() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
  const submithandler = async () => {
    console.log("Submitting:", name, email, password);

    try {
      const response = await axios.post(
        "https://server2-wt2y.onrender.com/employer/createuser",
        {
          name,
          email,
          password
        }
      );

      console.log("API Response:", response.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      navigate('/results');
    } catch (error) {
      console.error("API Error:", error);
    }
  };
//   const handleRoleSelection = (selectedRole) => {
//     setRole(selectedRole);
//   };
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="email_label">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password_label">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="role_label">
            <div
              className="recruiter"
              onClick={() => handleRoleSelection("recruiter")}
            >
              Recruiter
            </div>
            <div
              className="candidate"
              onClick={() => handleRoleSelection("candidate")}
            >
              Candidate
            </div>
          </div> */}
        </div>
      </form>

      <div className="btnsubmit">
        <button
          type="button"
          className="profileDataBtn"
          onClick={submithandler}
          form="signupForm"
        >
          Submit &rarr;
        </button>
      </div>
    </div>
  );
}

export default SignupR;