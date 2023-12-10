import React from "react";
import "./UserGuide.css";

const UserGuide = ({ onClose }) => {
  return (
    <div className="user-guide-container">
      <div className="user-guide-content">
        <h2>User Guide</h2>
        <p>Toll Calculator – Google Maps with Tolls & Fuel</p>
        <div className="guideInfo">
          <span>
            Looking to calculate toll tax between cities Toll Calculator App!
            See trip cost breakdown - tolls, fuel and other charges, toll plaza,
            discounts, etc.
          </span>
          <div className="steps">
                      <pre>
                          step 1: Enter Starting point that is your begin address<br /> 
                          step 2: Enter Destination address <br />
                          step 3: Enter Depature Time <br />
                          step 4 : Select the type of Vehicle<br />
                          step 5 : Finally click on calculate toll to Get your Toll Information<br />
            </pre>
          </div>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserGuide;
