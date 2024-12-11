import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll'; 
import './navbar.css'; 

const MyNavbar = () => {
  const navbarHeight = window.innerWidth < 768 ? 60 : 80; 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar expand="lg" fixed="top" className="navbar-custom">
      <Container>
        <Navbar.Brand
          onClick={scrollToTop} // Scroll to top on click
          style={{
            color: 'black',
            fontFamily:
              "'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS', sans-serif",
            cursor: 'pointer', // Make it clear it's clickable
          }}
        >
          Tathastu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {/* Home Link */}
            <Nav.Link>
              <Link
                to="top" // Placeholder target
                smooth={true}
                duration={10} // Smooth scrolling
                offset={-navbarHeight} // Adjust for fixed navbar height
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Explicit scroll to top
                className="nav-link-custom"
              >
                Home
              </Link>
            </Nav.Link>

            {/* About Us Link */}
            <Nav.Link>
              <Link
                to="about-us"
                smooth={true}
                duration={10}
                offset={-navbarHeight} // Adjust for navbar height
                className="nav-link-custom"
              >
                About Us
              </Link>
            </Nav.Link>

            {/* Services Link */}
            <Nav.Link>
              <Link
                to="Our-Programs"
                smooth={true}
                duration={10}
                offset={-navbarHeight}
                className="nav-link-custom"
              >
                Services
              </Link>
            </Nav.Link>

            {/* Contact Us Link */}
            <Nav.Link>
              <Link
                to="Footer"
                smooth={true}
                duration={10}
                offset={-navbarHeight}
                className="nav-link-custom"
              >
                Contact Us
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
