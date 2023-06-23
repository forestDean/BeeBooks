import React from "react";
import "./header.css";
// import Row from "../../components/Row";
// import Column from "../../components/Column";

import Container from '../../components/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// LOGO DESIGN
// import logo from '../../assets/images/beelogo.png';


const Header = () => {
return (
    <Navbar expand="lg" className="bg-body-tertiary">

    <Container>
      <Navbar.Brand href="#home">BeeBooks</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>

         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        );
}

export default Header;