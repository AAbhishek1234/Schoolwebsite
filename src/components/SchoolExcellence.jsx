import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './schoolexcellence.css'; // Import the external CSS

const SchoolsExcellence = () => {
  return (
    <Container fluid className="schools-excellence-container">
      <Row className="align-items-center schools-excellence-row">
        {/* Heading */}
        <Col xs={12} className="schools-excellence-heading-column">
          <h2 className="schools-excellence-heading">
            Schools Excellence
          </h2>
        </Col>

        {/* Image */}
        <Col xs={12} md={6} className="schools-excellence-image-column">
          <Image 
            src="/Images/scl.png" // Replace with your image URL
            alt="School Excellence" 
            fluid 
            className="schools-excellence-image"
          />
        </Col>
        
        {/* Paragraph */}
        <Col xs={12} md={6} className="schools-excellence-text-column">
          <p className="schools-excellence-paragraph">
            At Schools Excellence, we aim to provide a high standard of education 
            that fosters intellectual, social, and emotional development. Our 
            mission is to nurture talents, inspire innovation, and empower 
            students to achieve their full potential. With dedicated educators, 
            modern facilities, and a student-focused curriculum, we ensure that 
            every child thrives in a positive and inclusive environment.
          </p>
        </Col>

        {/* Button */}
     
      </Row>
    </Container>
  );
};

export default SchoolsExcellence;
