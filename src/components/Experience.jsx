import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./experience.css";

const HeroSection = () => {
  return (
    <Container fluid className="exp-py-5" style={{ backgroundColor: "#fff" }}>
      <Row className="align-items-center">
        {/* Mobile Text Section */}
        <Col xs={12} className="text-center d-md-none">
          <h2 className="fw-bold">
            We Have More Than <span className="highlight">20+</span> Years Of Experience.
          </h2>
        </Col>

        <Col xs={12} className="text-center d-md-none">
          <Image
            src="/Images/teamwithsolution.jpg"
            alt="Student Hero"
            loading="lazy" 
            fluid
            rounded
            className="hero-image"
          />
        </Col>

        <Col xs={12} className="text-center d-md-none">
          {/* Remove `text-muted` class here */}
          <p className="custom-paragraph">
            A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring. These are variations. A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring. These are variations.
          </p>
        </Col>

        <Col xs={12} className="text-center d-md-none">
          <Button variant="success" size="lg" className="rounded-pill mt-3 px-4">
            Discover More
          </Button>
        </Col>

        {/* Desktop Image Section */}
        <Col md={6} className="text-center d-none d-md-block">
          <div className="position-relative hero-image-container">
            <Image
              src="/Images/teamwithsolution.jpg"
              alt="Student Hero"
              fluid
              rounded
              className="hero-image"
            />
          </div>
        </Col>

        {/* Desktop Text Section */}
        <Col md={6} className="text-center text-md-start d-none d-md-block">
          <h2 className="fw-bold">
            We Have More Than <span className="highlight">20+</span> Years Of Experience.
          </h2>
          <p className="custom-paragraph">
            A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring. These are variations. A wonderful serenity has taken possession of my entire soul, like these
            sweet mornings of spring. These are variations.
          </p>
          <Button variant="success" size="lg" className="rounded-pill mt-3 px-4">
            Discover More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
