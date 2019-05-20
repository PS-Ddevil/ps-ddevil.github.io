import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../css/main.css';

import {Link} from 'react-router-dom';

class AppNavbar extends Component{
    render(){
        return(
            <Navbar collapseOnSelect  id="nav" expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand style={{fontFamily: "'Kaushan Script', cursive"}}><Link id="home-link" to="/">Purushottam Sinha</Link></Navbar.Brand>    
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link href="https://github.com/PS-Ddevil"><i className="fab fa-github"></i></Nav.Link>
                    <Nav.Link href="https://www.facebook.com/purushottam.sinha.31"><i className="fab fa-facebook-square"></i></Nav.Link>
                    <Nav.Link href="https://twitter.com/ThePSinha"><i className="fab fa-twitter"></i></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/purushottam-sinha-a78399160"><i className="fab fa-linkedin"></i></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );      
    }
} 

export default AppNavbar;