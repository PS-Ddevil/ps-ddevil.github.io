import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import dp from '../img/dp.jpg';

import '../css/About.css';

const renderTooltip = props => (
    <div
      {...props}
      
      style={{
        backgroundColor: 'white',
        padding: '2px 10px',
        color: 'black',
        borderRadius: 3,
        ...props.style,
      }}
    >
      9532108220
    </div>
  );

class About extends Component{

    render(){
        return(
            <div className="profile">
            <Container id="top-about-head">
                <h1 id="abtme">About Me!</h1>
            </Container>
            <Jumbotron id="prof-container">
                <Container>
                <Row>
                    <Col xs="12" md="4" lg="4" sm="12" xl="4">
                        <img id="profile-pic" src={dp} alt="Purushottam Sinha"></img>
                    </Col>
                    <Col xs="12" md="8" lg="8" sm="12" xl="8">
                        <h2>Purushottam Sinha</h2>
                        <h6>Computer Science and Engineering</h6>
                        <hr className="my-2" />
                        <Row>
                            <Col xs="12" md="2" lg="2" sm="12" xl="2">
                                <span class="head">Institute:</span><br></br>
                                <span class="head">Age:</span><br></br>
                                <span class="head">Location:</span><br></br>
                                <span class="head">Email:</span><br></br>
                                <span class="head">Phone:</span><br></br>
                            </Col>
                            <Col xs="12" md="10" lg="10" sm="12" xl="10">
                                <span class="desp">Indian Institute of Technology, Mandi</span><br></br>
                                <sapn class="desp">20 years</sapn><br></br>
                                <span class="desp">Varanasi/Mandi</span><br></br>
                                <span class="desp">sinhapurushottam911@gmail.com</span><br></br>
                                <span class="desp">7355414418</span><br></br>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </Container>
                <Container>
                    <center>
                    <a className="navicon" href="https://github.com/PS-Ddevil"><i className="fab fa-github abticon"></i></a>
                    <a className="navicon" href="https://www.facebook.com/purushottam.sinha.31"><i className="fab fa-facebook-square abticon"></i></a>
                    <a className="navicon" href="https://twitter.com/ThePSinha"><i className="fab fa-twitter abticon"></i></a>
                    <a className="navicon" href="https://www.linkedin.com/in/purushottam-sinha-a78399160"><i className="fab fa-linkedin abticon"></i></a>
                    <a className="navicon" href="https://www.quora.com/profile/Purushottam-Sinha-5"><i className="fab fa-quora abticon"></i></a>
                    <a className="navicon" href="tel:7355414418"><i className="fas fa-phone abticon"></i></a>
                    <a className="navicon" href="mailto:sinhapurushottam911@gmail.com"><i className="fas fa-envelope abticon"></i></a>
                    <OverlayTrigger placement="right-start" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                    <a href="https://wa.me/919532108220?text=Hey"><i className="fab fa-whatsapp abticon"></i></a>
                    </OverlayTrigger>
                    </center>
                </Container>
            </Jumbotron>
            <Container>
                <h1 id="journey">My Journey!</h1>
            </Container>
            <Container id="journeysection">
                <hr></hr>
                <div className="left">
                    <h3><i class='fas fa-graduation-cap'></i> Bachelors</h3>
                    <span>Indian Institute of Technology, Mandi</span><br></br>
                    <span>CGPA: 8.35 (Till 3rd Semester)</span><br></br>
                </div>
                <hr></hr>
                <div className="right">
                    <h3><i class='fas fa-graduation-cap'></i> Higher Secondary</h3>
                    <span>Shiv Jyoti Convent School, Kota</span><br></br>
                    <span>Percentage: 94.2%</span><br></br>
                </div>
                <hr></hr>
                <div className="left">
                    <h3><i class='fas fa-graduation-cap'></i> High School</h3>
                    <span>Sunbeam School, Varuna</span><br></br>
                    <span>CGPA: 10</span><br></br>
                </div>
                <hr></hr>
            </Container>
            </div>
        );
    }
}

export default About;