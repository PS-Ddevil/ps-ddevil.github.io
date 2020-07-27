import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import 'aos/dist/aos.css';
import AOS from 'aos';

import psinha from '../img/psinha.png';
import pdf from '../pdf/resume.pdf';

import '../css/Landing.css'

class Landing extends Component {

    constructor(props, context) { 
        super(props, context); 
        AOS.init(); 
    } 

    componentWillReceiveProps (){ 
        AOS.refresh(); 
    } 

    render() {
        return (
        <div className="sectionStyle">
            <div id="main_id">
                <center><img id="main-pic" src = {psinha} alt="psinha"></img></center>
                <center><p id="main-text">Purushottam Sinha</p></center>
                <center>
                  <Link to="/about" id="link-btn"><Button variant="outline-light" id="about-btn">About Me</Button></Link>{' '}
                  <Link to="/projects" id="link-btn"><Button variant="outline-light" id="proj-btn">Projects</Button></Link>{' '}
                  <a href="https://ps-ddevil.github.io/blogs/" id="link-btn"><Button variant="outline-light" id="proj-btn">Blogs</Button></a>{' '}
                  <a href={pdf} id="link-btn" download><Button variant="outline-light" id="res-btn">Resume</Button></a>
                </center>
            </div>
        </div>
        );
    }
}

export default Landing;
