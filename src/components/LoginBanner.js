import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Groupchild from "../assets/images/Groupchild.png";
import Footer from "../components/footer/Footer"
import Loginimg from "../../src/assets/images/admin_login.png"
import Carousel from 'react-bootstrap/Carousel';
import Login from "./Login";



const LoginBanner = () => {
  return (
    <div className="container-fluid">
      <Row className="flex-fill bg-img1 ">

      <Col lg={5} md={5} sm={12} className="awc-login-col  awc-banner-p">
         

         <div className="awc-login">
         
          <h1>
           <div className="admin-pannel-img"><i><img src={Loginimg} alt="login pannel"></img></i>Login Pannel</div>
          </h1>
          
           <Form className="awc-form">
             <div className=" nd-Login-form">
              
              
              
               <Login />
             </div>
           </Form>
         </div>
         {/* <Footer /> */}
       </Col>
        <Col
          lg={7}
          md={7}
          sm={12}
          className="awc-col awc-p awc-border awc-bg-img"
        >
          
          <Carousel className="resorce-craousal">
      <Carousel.Item>
        {/* <Group text="First slide" /> */}
        <div>
          <i><img src={Groupchild} alt="carousel img" className="img-fluid"></img></i>
        </div>
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <Group text="Second slide" /> */}
        <div>
        <i><img src={Groupchild} alt="carousel img" className="img-fluid img-width" ></img></i>
        </div>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <Group text="Third slide" /> */}
        <div>
        <i><img src={Groupchild} alt="carousel img" className="img-fluid"></img></i>
        </div>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Col>

      
      </Row>
<Footer />
    </div>
  );
};

export default LoginBanner;
