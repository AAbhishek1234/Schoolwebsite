import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./studentclub.css"; // Custom CSS

const StudentClub = () => {
  return (
    <div className="student-club-container">
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Left Image Section */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img
              src="/Images/grpstudents.png"
              alt="Group of Students"
              className="student-club-image img-fluid"
            />
          </Col>

          {/* Right Content Section */}
          <Col xs={12} md={6}>
            <h1 className="student-club-title">Student's Club</h1>
            <p className="student-club-description">
              Welcome to the Student Club, a vibrant and engaging community
              designed to support students in their academic journey and
              personal growth. The Student Club serves as a platform for
              students to connect, collaborate, and engage in a variety of
              extracurricular activities that complement their education.
            </p>
            <Button variant="success" className="student-club-btn">
              Join Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudentClub;
