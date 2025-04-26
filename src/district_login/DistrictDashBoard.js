
import UKLogon from "../assets/images/uklogo.png";
import MenuIcon from "../assets/images/menu_icon.png";
import { LuLogOut, LuMapPinned } from "react-icons/lu";
import React, { useState } from "react";
// import "../../admin_login/assets/css/DashBoard.css";
import { FaAlignLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
// import LogoCDPO from "../../assets/images/Logo-cdpo.png";
import { RxDashboard } from "react-icons/rx";
import { MdExpandLess } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { ImDisplay } from "react-icons/im";
import { GiTowerFlag } from "react-icons/gi";
// import LogoDhanparwa from "../../assets/images/LogoDhanParbaw.png";



function DistrictDashBoard() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  const [expandedMenus, setExpandedItems] = useState({});

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  const toggleSubMenu = (index) => {
    setExpandedItems((prev) => ({
      [index]: !prev[index],
    }));
  };

  const navigationOptions = [
    {
      icon: <RxDashboard />,
      label: "DashBoard",
      path: "#",
    },
    {
      icon: <ImDisplay />,
      label: "Menu-1",
      path: "#",
    },

    {
      icon:  <span title="Surrender/Demand Summary"><GiTowerFlag /></span>,
      label: "Menu-2",
      subRoutes: [
        {
          icon: <IoIosList  />,
          label: "Menu-2-01",
          path: "#",
        },
        {
          icon: <LuMapPinned />,
          label: "Menu-2-02",
          path: "#",
        },
       
      ],
    },
   

     {
          icon: <IoIosCall />,
          label: "Technical Help: 7668151041",
    
        },
  ];

  return (
    <>
      <header className="user-awc-header">
        <div className="logosec">
          <img
            src={MenuIcon}
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={toggleNav}
          />
           <Link to="#" className="logo-page">
                      {/* <img src={LogoDhanparwa} alt="logo" className="dhan-parwa-logo img-fluid" /> */}
                    </Link>
          <Link to="#" className="logo-page">
            <img src={UKLogon} alt="logo" className="wced-logo" />
          </Link>
          <div className="awc-title">
            <span className="awc-subtitle">उत्तराखंड सरकार | Govt. of Uttarakhand</span>
            <p>Uttarakhand State Resource Center for Children</p>
          </div>
        </div>
        <div className="message">
          <div className="awc-msg p-2">
            {/* <i>
              <img src={LogoCDPO} alt="WECD-LOGO" className="awc-logo-img" />
            </i> */}
            {/* <span className="mx-2">Finance login :</span>
            <span>Almora</span> */}
          </div>
          <div className="finance-dp" alt="logout" title="Click to logout">
            <div className="awc-log-icon">
              <LuLogOut className="awc-logout" />
            </div>
          </div>
        </div>
      </header>

      <div className="district-lhs-nav">
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="child-nav">
              <div className="nav-upper-options">
                <div className="dpo-menu">
                  <div>
                    <FaAlignLeft className="icn dpo-menuicn" onClick={toggleNav} />
                  </div>
                  {/* <div className="dpo-user">Finance login : Almora</div> */}
                  <div className="finance-log-icon-mob">
                    <LuLogOut className=" " title="Click to logout" />
                  </div>
                </div>
                {/* pdf link */}
                {navigationOptions.map((option, index) => (
                  <React.Fragment key={index}>
                    {option.download ? (
                      // ancore
                      <Link
                        to={option.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`district-nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    ) : option.subRoutes ? (
                      <>
                        <div
                          className={`district-nav-option option${index + 1}`}
                          onClick={() => toggleSubMenu(option.label)}
                          style={{ cursor: "pointer" }}
                        >
                          <div className="nav-item">
                            <div className="awc-nav-items">
                              <span className="nav-icon">{option.icon}</span>
                              <span className="nav-label">{option.label}</span>
                              <span className="dropdown-arrow">
                                {expandedMenus[option.label] ? (
                                  <MdExpandLess />
                                ) : (
                                  <MdKeyboardArrowRight />
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        {expandedMenus[option.label] &&
                          option.subRoutes.map((subOption, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subOption.path}
                              className="district-sub-option"
                            >
                              <div className="nav-item">
                                <div className="d-flex awc-sub-item">
                                  <span className="nav-icon">
                                    {subOption.icon}
                                  </span>
                                  <span className="nav-label">
                                    {subOption.label}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          ))}
                      </>
                    ) : (
                      <Link
                        to={option.path}
                        className={`district-nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default DistrictDashBoard;
