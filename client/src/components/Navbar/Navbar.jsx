import React from 'react'
import { Link} from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  return (
    <div>
    <header>
    <div className="container">

      <div className="logo-container">
        <h3 className="logo">Employee<span>Validation</span></h3>
      </div>

      <div className="nav-btn">

        <div className="nav-links">
          <ul>
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
                <Link to="/SocialLinks">Apply</Link>
            </li>
            <li className="nav-link">
                <Link to="/results">Results</Link>
            </li>
            <li className="nav-link" >
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>

        <div className="log-sign">
          <Link to="/login" className="btn transparent">Log in</Link>
          <Link to="/signup" className="btn solid">Sign up</Link>
        </div>

      </div>

      <div className="hamburger-menu-container">
        <div className="hamburger-menu">
          <div></div>
        </div>
      </div>

    </div>
  </header>
    </div>
  )
}

export default Navbar