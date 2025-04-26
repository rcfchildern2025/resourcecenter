import React from "react";
import {  Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../src/components/custom/style.css";
import "font-awesome/css/font-awesome.min.css";
import LoginBanner from "../src/components/LoginBanner";
import Login from "./components/Login";
import NavBar from "./components/topnav/NavBar";
import UserPage from "./components/UserPage";
import Footer from "../src/components/footer/Footer";
// admindashboard
import { useLocation } from "react-router-dom";
import DashBoard from "./admin_login/admin_dashboard/DashBoard";
import InnerDashboard from "./admin_login/admin_dashboard/InnerDashboard";
import DistrictInnerDashBoard from "./district_login/DistrictInnerDashBoard";
import StateDashBoard from "./State_login/state_dashboard/StateDashBoard";
import StateInnerDashBoard from "./State_login/state_dashboard/StateInnerDashBoard";

function App() {
    const location = useLocation();
      const hiddenPaths = new Set([
        "/InnerDashboard",
        "/DashBoard",
        "/DistrictInnerDashBoard",
        "/StateDashBoard",
        "/StateInnerDashBoard",

    
      ]); 
      // const hiddenFooter1 = new Set([
      //   "/InnerDashboard",
       
      // ]); // Correct absolute paths
      const shouldHideNavbar = hiddenPaths.has(location.pathname);
      // const shouldHideFooter1 = hiddenFooter1.has(location.pathname);
  return (
   
 <>

 {!shouldHideNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/LoginBanner" element={<LoginBanner />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/InnerDashboard" element={<InnerDashboard />} />
        <Route path="/DistrictInnerDashBoard" element={<DistrictInnerDashBoard />} />
        <Route path="/StateDashBoard" element={<StateDashBoard />} />
        <Route path="/StateInnerDashBoard" element={<StateInnerDashBoard />} />
        
        <Route path="/Footer" element={<Footer />} />
      </Routes>
   
     
     
    </>
  );
}
 
export default App;