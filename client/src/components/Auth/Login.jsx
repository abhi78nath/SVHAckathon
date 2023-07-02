import React from 'react'
import "./login.css";
function Login() {


  return (
    <div className='auth'>  
         <form>
            <div className='signup'>
                <h2>Sign Up</h2>
                    <div className="Name_label">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>

                    <div className="email_label">
                        <label for="email">E-Mail</label>
                        <input type="email" id="email" name="email" />
                    </div>

                    <div className="password_label">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <div className="role_label">
                        <div className='recruiter'>Recruiter</div>
                        <div className='candidate'>Candidate</div>
                    </div>                                                            
            </div>
            </form>

            <form>
                <div className='login'>
                    <h2>Sign In</h2>

                    <div className="email_label">
                        <label for="email">E-Mail</label>
                        <input type="email" id="email" name="email" />{" "}
                    </div>

                    <div className="password_label">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" />{" "}
                    </div>

                    <div className="role_label">
                        <div className='recruiter'>Recruiter</div>
                        <div className='candidate'>Candidate</div>
                    </div>
                </div>
            </form>

        <div className="btnsubmit">
            <button type="submit" className="profileDataBtn">
                     Submit &rarr;
            </button>
      </div>
    </div>
  )
}

export default Login