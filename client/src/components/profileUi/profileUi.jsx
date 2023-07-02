import React from 'react'
import "./profileui.css";
import Img from "../../assets/userprofile.png";
import OfferImg from "../../assets/offer.png";
function profileUi() {
  return (
    <div className='profileUi'>
          <div className='profImg'>
                  <img src={Img} alt="profile img"/>
          </div>

          <div className='profDetails'>    
                <div className='profName'>Bikramjit</div>
                <div className='profSocial'>
                <div className='profRole'>Role
                <ul>
                  <li>SDE</li>
                </ul>
                </div>
                <div className='profEmail'>email
                <ul>
                        <li>Email</li>
                        <li>PhoneNumber</li>
                </ul>
                </div>
                <div className='profLinkedin'>Linked In
                  <ul>
                        <li>Connections:</li>
                        <li>Companies:</li>
                        <li>Projects:</li>
                  </ul>
                </div>
                <div className='profGithub'>Github
                <ul>
                        <li>Repositories:</li>
                        <li>Followers:</li>
                        <li>Contributions:</li>
                  </ul>
                </div>
                <div className='profDribble'>Dribble
                <ul>
                        <li>Works:</li>
                        <li>Projects:</li>
                        <li>Collections:</li>
                        <li>likedShots:</li>
                  </ul>
                </div>
                <div className='profKaggle'>Kaggle
                <ul>
                        <li>Competitions:</li>
                        <li>Datasets:</li>
                        <li>Code:</li>
                        <li>Discussions:</li>
                        <li>Followers:</li>
                  </ul>
                </div>
                </div>
          </div>

          <div className='offer'>
                <div className='offDetails'><img src={OfferImg}/><p>Experience</p> </div>
                <div className='offDetails'><img src={OfferImg}/><p>Bookmarks</p></div>
                <div className='offDetails'><img src={OfferImg}/><p>Offers</p></div>
                <div className='offDetails'><img src={OfferImg}/><p>Rating</p></div>
          </div>
    </div>
  )
}

export default profileUi