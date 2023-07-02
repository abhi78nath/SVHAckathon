import React, { useRef } from "react";
import "./profileData.css";



function ProfileData() {
  const fileInputRef = useRef(null);

  const activateInput = () => {
    fileInputRef.current.click();
  };

  const deactivateOverlay = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="profileData">
      <div className="personalData">
        <div className="Name_label">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />{" "}
        </div>

        <div className="roles">
          Roles
          <span id="role_label">
            <input
              className="in-check"
              type="checkbox"
              id="sde"
              name="sde"
              value="sde"
            />
            <label for="sde">Software Development</label>
          </span>
          <span id="role_label">
            <input
              className="in-check"
              type="checkbox"
              id="designer"
              name="designer"
              value="designer"
            />
            <label for="designer">Designer</label>{" "}
          </span>
          <span id="role_label">
            <input
              className="in-check"
              type="checkbox"
              id="ds"
              name="ds"
              value="ds"
            />
            <label for="ds">Data Science and Engineering</label>{" "}
          </span>
        </div>

        <div className="email_label">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div className="phone_number">
          <label for="phone">Phone Number</label>
          <input type="number" name="phone" id="phone" />
        </div>

        <div className="experience_label">
          <label for="experience">Experience</label>
          <input type="number" name="experience" id="experience" />
        </div>

        <div className="cv">
          <div className="cvPlaceholder" onClick={activateInput}>
            Upload CV
          </div>
          <input
            type="file"
            name="file"
            id="file"
            placeholder="Upload CV"
            onClick={deactivateOverlay}
            ref={fileInputRef}
          />
        </div>
      </div>

      <div className="socialData">
        <label for="linkedin">Linked In</label>
        <input type="text" id="linkedin" name="linkedin" />

        <label for="github">Github</label>
        <input type="text" id="github" name="github" />

        <label for="dribble">Dribbble</label>
        <input type="text" id="dribble" name="dribble" />

        <label for="kaggle">kaggle</label>
        <input type="text" id="kaggle" name="kaggle" />

        {/* <button type='submit' className='profileDataBtn'>Submit</button>           */}
      </div>

      <div className="btnsubmit">
        <button type="submit" className="profileDataBtn">
          Submit &rarr;
        </button>
      </div>
    </div>
  );
}

export default ProfileData;
