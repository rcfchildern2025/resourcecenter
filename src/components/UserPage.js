import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import { Col, Row, Table, Tabs } from "react-bootstrap";
import "../assets/css/UserPage.css";
import PoorImg from "../assets/images/poorimg.png";
import { Tab } from "bootstrap/dist/js/bootstrap.bundle.min";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../components/footer/Footer"
import Banner1 from "../assets/images/banner-1.png";
import Banner2 from "../assets/images/banner-2.png";
import Banner3 from "../assets/images/banner-3.png";
function UserPage() {
  return (
    <div className="container-fluid">
      {/* <Row className='resorce-img'>
           <div className='resprce-main-title'>
            <div className='resorce-sub-title'>
            <h1>Nurturing Little Hearts</h1>
            <h1>Growing Bright Futures</h1>
            <p>Safe, Loving, and Supportive Care for Every Child</p>
            </div>
            <div className='resorce-img'>
                <i><img src={Groupimages1} alt="groupimage" className='img-fluid'></img></i>
            </div>
           </div>
        </Row> */}

           <Carousel className="resorce-craousal  " interval={3000} pause={false}>
              <Carousel.Item>
              <Row className="resorce-img">
       
       <Col lg={6} md={6} sm={12}>
           <div className="resorce-sub-title">
             <h1>Nurturing Little Hearts</h1>
             <h1>Growing Bright Futures</h1>
             <p>Safe, Loving, and Supportive Care for Every Child</p>
           </div>
         </Col>

                 <Col lg={6} md={6} sm={12}>
           <div>
             <i>
               <img
                 src={Banner1}
                 alt="groupimage"
                 className="img-fluid"
               ></img>
             </i>
           </div>
         </Col>
        
       </Row>
                <Carousel.Caption>
               
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Row className="resorce-img">
       
       <Col lg={6} md={6} sm={12}>
           <div className="resorce-sub-title">
             <h1>Nurturing Little Hearts</h1>
             <h1>Growing Bright Futures</h1>
             <p>Safe, Loving, and Supportive Care for Every Child</p>
           </div>
         </Col>

                 <Col lg={6} md={6} sm={12}>
           <div>
             <i>
               <img
                 src={Banner2}
                 alt="groupimage"
                 className="img-fluid"
               ></img>
             </i>
           </div>
         </Col>
         
        
       </Row>
                <Carousel.Caption>
               
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <Row className="resorce-img">
       
       <Col lg={6} md={6} sm={12}>
           <div className="resorce-sub-title">
             <h1>Nurturing Little Hearts</h1>
             <h1>Growing Bright Futures</h1>
             <p>Safe, Loving, and Supportive Care for Every Child</p>
           </div>
         </Col>

                 <Col lg={6} md={6} sm={12}>
           <div>
             <i>
               <img
                 src={Banner3}
                 alt="groupimage"
                 className="img-fluid"
               ></img>
             </i>
           </div>
         </Col>
         
        
       </Row>
                <Carousel.Caption>
               
                </Carousel.Caption>
              </Carousel.Item>
              
            
              
            </Carousel>
      
      <Row className="mt-3">
        <Col lg={6} md={6} sm={12}>
          <div>
            <i>
              <img src={PoorImg} alt="groupimage" className="img-fluid"></img>
            </i>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <div className="resorce-sub-list">
            <h1>स्टेट रिर्सोंस सेन्टर फॉंर चिल्ड्रेन का उदेश्य</h1>
            <ol>
              <li>
                देखरेख एवं संरक्षण की आवश्यकता की श्रेणी के बच्चों के साथ
                कुपोषित एवं एनेमिक बच्चों के देखरेख संरक्षण एवं पुनर्वास हेतु
                रेखीय विभागो के साथ संबंधित प्रयास करन
              </li>
              <li>
                देखरेख एवं संरक्षण की आवश्यकता की श्रेणी के बच्चों के साथ
                कुपोषित एवं एनेमिक बच्चों का चिन्हिकरण डाटा बैंक तैयार करना व
                उनके उपयुक्त पुनर्वास के लिए भाभी कदम उठाना.
              </li>
              <li>
                चिन्हित बच्चों के देखरेख एवं पुनर्वास के लिए राज्य स्तर और जिला
                स्तर दोनों पर नोडल अधिकारी की भूमिका और जिम्मेदारी सुनिश्चित
                करना
              </li>
              <li>
                उक्त बच्चों के पुनर्वास के लिए उनकी मौजूदा स्थिति के अनुसार उपाय
                की सिफारिश करना और राज्य स्तरीय अनुश्रवण एवं मूल्यांकन समिति की
                रिपोर्टिंग
              </li>
              <li>नवाचार गतिविधियों हेतु कार्य योजना तैयार करना </li>
            </ol>
          </div>
        </Col>
      </Row>

      <Row className="table-tab mt-3">
        <div className="recorce-accordion">
      <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>बालश्रम</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>मानव तस्करी</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>बाल विवाह</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>पोस्को पीड़ित</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>नशा मुक्ति</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>कुपोषित बच्चे (0 – 6) वर्</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>एनीमिया से ग्रसित बच्च</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>दिव्यांग बच्च</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>एचआईवी एड्स</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>मानव तस्कर</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header>देखरेख एवं संरक्षण</Accordion.Header>
        <Accordion.Body>
        <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>

<div className="resorce-tabs1">

        <Tabs
          defaultActiveKey="बालश्रम"
          id="fill-tab-example"
          className="mb-3 resorce-tabs"
          fill
        >
          <Tab eventKey="बालश्रम" title="बालश्रम" className="table-item">
          <Table striped bordered hover>
      <thead className="child-thead">
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>

          <Tab eventKey="मानव तस्कर" title="मानव तस्कर" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>3</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="बाल विवाह" title="बाल विवाह" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>5</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="पोस्को पीड़िता" title="पोस्को पीड़िता" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>15</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="नशा मुक्ति" title="नशा मुक्ति" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>13</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="कुपोषित बच्चे (0 – 6) वर्ष" title="कुपोषित बच्चे (0 – 6) वर्ष" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>2</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="एनीमिया से ग्रसित बच्चे" title="एनीमिया से ग्रसित बच्चे" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>xyz</td>
          <td>4</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="दिव्यांग बच्चे" title="दिव्यांग बच्चे" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>8</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="एचआईवी एड्स" title="एचआईवी एड्स" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>6</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
          <Tab eventKey="देखरेख एवं संरक्षण" title="देखरेख एवं संरक्षण" className="table-item">
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>District</th>
          <th>Department</th>
          <th>Total Candidates</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Almora</td>
          <td>abc</td>
          <td>10</td>
          
        </tr>
      
      </tbody>
    </Table>
          </Tab>
        
        </Tabs>
        </div>
      </Row>
      <Footer />
    </div>
  );
}

export default UserPage;
