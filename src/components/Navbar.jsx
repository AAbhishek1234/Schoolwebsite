import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css'; // Ensure this contains the updated styles

const MyNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/" 
          style={{
            color: "black", 
            fontFamily: "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif"
          }}
        >
          School
        </Navbar.Brand>
        {/* Black Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
