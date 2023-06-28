import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import Row from "../../components/Row";
// import Column from "../../components/Column";


import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';

// LOGO DESIGN
import logo from '../../assets/images/beelogo.png';


const Header = () => {
return (

  <header id="header">    
    <Navbar expand="lg" className="navbar">
        <Container className="navbarMenu">
          <Navbar.Brand href="/"> 
          <img 
            src={logo}
            alt="bee"
            className='logo'>
          </img> 
          <span id="title">BeeBooks</span>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
          </div>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>

        );
}

export default Header;