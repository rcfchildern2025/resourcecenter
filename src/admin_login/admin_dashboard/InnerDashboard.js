import React from "react";
import "../../admin_login/assets/css/AdminLeftNav.css";
import DashBoard from "./DashBoard";


const InnerDashboard = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DashBoard />

          {/* Main Content */}

          <div className="main">
          <div className="chilt-dashboard-title"> 
                <h1>Admin DashBoard Login</h1>
            </div>
          <div className="box-container">
             Child Resorces
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

export default InnerDashboard;
