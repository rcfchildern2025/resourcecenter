import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../../src/assets/css/LoginBanner.css";
import { Link } from "react-router-dom";

function Login() {
  const [isRadio, setIsRadio] = useState(1);

  const handleChange = (e) => {
    setIsRadio(+e.currentTarget.value);
  };

  const renderForm = () => {
    switch (isRadio) {
      case 1:
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="adminUsername">
              <Form.Label className="nd-form-label">User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Name"
                className="nd-form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="adminPassword">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
             <Link to ="/InnerDashboard"> <Button className="nd-primary">Login</Button></Link>
            </div>
          </Form>
        );

      case 2:
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="departmentSelect">
              <Form.Label className="nd-form-label">Department Login</Form.Label>
              <Form.Select className="nd-steps-drop">
                <option value="">Please Select Department</option>
                <option value="Chakrata">Chakrata</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="stateUsername">
              <Form.Label className="nd-form-label">User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Name"
                className="nd-form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="statePassword">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
              <Link to ="/StateInnerDashBoard"><Button className="nd-primary">Login</Button></Link>
            </div>
          </Form>
        );

      case 3:
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="districtSelect">
              <Form.Label className="nd-form-label">District:</Form.Label>
              <Form.Select className="nd-steps-drop">
                <option value="">Please Select District</option>
                <option value="Chakrata">Chakrata</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="deptSelect">
              <Form.Label className="nd-form-label">Department:</Form.Label>
              <Form.Select className="nd-steps-drop">
                <option value="">Please Select Department</option>
                <option value="Chakrata">Chakrata</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="districtUsername">
              <Form.Label className="nd-form-label">User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="User Name"
                className="nd-form-control"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="districtPassword">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
             <Link to="/DistrictInnerDashBoard"><Button className="nd-primary">Login</Button></Link> 
            </div>
          </Form>
        );

      default:
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="blockLoginType">
              <Form.Label className="nd-form-label">Login Type</Form.Label>
              <Form.Control
                type="text"
                value="Block Login"
                readOnly
                className="nd-form-control"
              />
            </Form.Group>

            {/* Add additional AWC logic or options here as you did above, keeping the same format */}

            <Form.Group className="mb-3" controlId="awcPassword">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
             <Link to="/StateInnerDashBoard"><Button className="nd-primary">Login</Button></Link> 
            </div>
          </Form>
        );
    }
  };

  return (
    <div className="container-fluid nd-login-banner">
      <Row className="nd-admin-login">
        <div className=" nd-admin-form">
          <Form className="nd-form">
            <Row className="nd-p-18">
              {[{ label: "Admin Login", value: 1 },
                { label: "State Login", value: 2 },
                { label: "District Login", value: 3 }].map((item) => (
                <Col lg={4} md={6} sm={6} key={item.value}>
                  <div className="form-check">
                 <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={`radio${item.value}`}
                      value={item.value}
                      onChange={handleChange}
                      checked={isRadio === item.value}
                    />
                    <label className="form-check-label" htmlFor={`radio${item.value}`}>
                      {item.label}
                    </label>
                  </div>
                </Col>
              ))}
            </Row>

            <div className="nd-login-title">
              <h1>
                {isRadio === 1
                  ? "Admin Login"
                  : isRadio === 2
                  ? "State Login"
                  : isRadio === 3
                  ? "District Login"
                  : "AWC Login"}
              </h1>
            </div>

            {renderForm()}
          </Form>
        </div>
      </Row>
    </div>
  );
}

export default Login;
