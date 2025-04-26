import React from "react";
import "../../State_login/assets/css/StateLeftNav.css";
import StateDashBoard from "./StateDashBoard";



const StateInnerDashBoard = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <StateDashBoard />

          {/* Main Content */}

          <div className="main">
          <div className="chilt-dashboard-title"> 
                <h1>State DashBoard Login</h1>
            </div>
          <div className="box-container">
            State DashBoard
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

export default StateInnerDashBoard;
