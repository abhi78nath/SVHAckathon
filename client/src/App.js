import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ProfileDetails from "./components/profileForm/profileData";
// import Auth from "./components/Auth/LoginP";
import Signup from "./components/Auth/signup";
import Login from "./components/Auth/Login";
import Profile from "./components/profileUi/profileUi";
import Home from "./components/Home/Home";
import Results from "./components/Results/ResultsUi";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/socialLinks" element={<ProfileDetails />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/results" element={<Results/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
