import React, { useRef } from "react";
import "./results.css";



function Resultsui() {
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
        {/* <div className="Name_label">
          <label for="search">Search</label>
          <input type="text" id="search" name="search" />{" "}
        </div> */}

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

        <div className="showResults go">
            GO
        </div>
      </div>

      <div className="socialData">
        <p><h3>Results</h3></p>
        <div className="showResults">
            Bikramjit  &rarr;
        </div>

        {/* <button type='submit' className='profileDataBtn'>Submit</button>           */}
      </div>
    </div>
  );
}

export default Resultsui;
