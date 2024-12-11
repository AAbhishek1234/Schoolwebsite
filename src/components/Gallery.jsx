import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./gallery.css"; // For additional custom styling

const Gallery = () => {
  return (
    <Container fluid className="gallery-py-4" style={{backgroundColor:"		#FFFAFA",marginTop:"1rem"}}>
      <h1 className="text-center mb-5" style={{ color: "black" }}>
        Our Event Gallery
      </h1>
      <Row className="g-4">
        <Col xs={12} sm={6} md={4}>
          <Image src="/Images/child1.jpg" alt="Event 1" fluid rounded />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/Images/child2.jpg" alt="Event 2" fluid rounded />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/Images/child3.jpg" alt="Event 3" fluid rounded />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/Images/child4.jpg" alt="Event 4" fluid rounded />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/Images/child1.jpg" alt="Event 5" fluid rounded />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Image src="/Images/child2.jpg" alt="Event 6" fluid rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
