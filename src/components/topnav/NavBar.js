
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../assets/css/LoginBanner.css";

import "font-awesome/css/font-awesome.min.css";
import Logo from "../../assets/images/uklogo.png";
// import Wecdlogo from "../../assets/images/wecdlogo.png";

import { Link } from "react-router-dom";
import "../../assets/css/NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        className="bg-body-tertiary navbar-top awc-main  justify-content-between"
      >
        <Container fluid className="container-fluid awc-mob-responsive">
          <Link to="/" className="logo-page">
            <img src={Logo} alt="logo" className="logo-wecd" />
          </Link>
          {/* <Link to="/" className="logo-page">
            <img src={Logo} alt="logo" className="logo1" />
          </Link> */}

          <div className="awc-title">
            <span className="awc-subtitle">
              उत्तराखंड सरकार | Govt. of Uttarakhand{" "}
            </span>
            <p>Uttarakhand State Resource Center for Children</p>
          </div>
          <Link to="../Home" className="logo-page"></Link>
          <Navbar.Brand
            href="#home"
            className="ml-4 navbar-title"
          ></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="toggle-logo"
          />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="me-auto justify-content-end flex-grow-1 nd-nav">
              <Nav.Link href="/UserPage">
                Home |
              </Nav.Link>

              <Nav.Link href="/LoginBanner" className="nav-sub-list">
                Nodel Officer/Admin Login
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;