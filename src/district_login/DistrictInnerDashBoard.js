import React from "react";
import "../district_login/assets/css/DistrictLeftNav.css";
import DistrictDashBoard from "./DistrictDashBoard";



const DistrictInnerDashBoard = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DistrictDashBoard />

          {/* Main Content */}

          <div className="main">
          <div className="chilt-dashboard-title"> 
                <h1>District DashBoard Login</h1>
            </div>
          <div className="box-container">
            District DashBoard
            </div>
            <div>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DistrictInnerDashBoard;
