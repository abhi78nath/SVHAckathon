import React from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";
import Sphere from "../../assets/sphere.png";
import Left from "../../assets/left.png";
import Right from "../../assets/right.png";
import Bottom from "../../assets/down.png";
import Hero from "../../assets/hero2.jpg";
function Home() {
  return (
    <div className="home">
      {/* <Navbar/> */}
      <div className="heroPart">
        <div className="heroimg">
          <img src={Hero} />
        </div>
        <div className="herodes">
          Connect talented individuals with exceptional companies. Discover
          exciting opportunities that align with your skills and values.
          Showcase your unique culture and attract the brightest talent. Join us
          today and embark on a journey towards a fulfilling career or find the
          ideal candidate that propels your organization to new heights.
        </div>
      </div>
      <div className="guide">
        <div className="guideText">
          <h1>HOW TO GET STARTED?</h1>
        </div>
        <div className="guidevis">
          <div className="items1 sph">
            <p className="textOverlap">Sign up</p>
            <img src={Sphere} />{" "}
          </div>
          <div className="items1 arr">
            <img src={Right} />
          </div>
          <div className="items1 sph">
            <p className="textOverlap">Enter Details</p>
            <img src={Sphere} />
          </div>
          <div className="items1 arr">
            <img src={Right} />
          </div>
          <div className="items1 sph">
            <p className="textOverlap">Link your Profiles</p>
            <img src={Sphere} />
          </div>
          <div className="items5 arrB">
            <img src={Bottom} />
          </div>
          <div className="items2 sph">
            <p className="textOverlap">Start Working!</p>
            <img src={Sphere} />
          </div>
          <div className="items2 arr">
            <img src={Left} />
          </div>
          <div className="items2 sph">
            <p className="textOverlap">Get Offers</p>
            <img src={Sphere} />
          </div>
          <div className="items2 arr">
            <img src={Left} />{" "}
          </div>
          <div className="items2 sph">
            <p className="textOverlap">Recruiter can view your profile</p>
            <img src={Sphere} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
