import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ourprograms.css'; 

const OurPrograms = () => {
  const opportunities = [
    {
      title: 'Flexible Working Hours',
      description:
        'Enjoy work-life balance with flexible hours that fit your schedule, giving you time for personal commitments.',
      icon: '📊', // Replace with an actual icon/image
    },
    {
      title: 'Competitive Salary',
      description:
        'We offer a salary that reflects your skills and experience, ensuring you’re fairly compensated for your contributions.',
      icon: '💰',
    },
    {
      title: 'Career Advancement Opportunities',
      description:
        'Clear pathways for promotions and leadership roles, enabling you to grow within the company.',
      icon: '📈',
    },
    {
      title: 'Remote Work Opportunities',
      description:
        'The option to work remotely, offering the flexibility to work from anywhere and reduce commuting stress.',
      icon: '💻',
    },
  ];

  return (
    <Container className="career-container my-5">
      <h1 className="career-title text-center">Our Programs</h1>
      <p className="career-subtitle text-center">
      We aim to empower students to make informed decisions about their academic journey, personal growth, and future career paths. 
      </p>
      <Row className="mt-4">
        {opportunities.map((opportunity, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <Card className="career-card text-center shadow-sm h-100">
              <Card.Body>
                <div className="career-icon mb-3">{opportunity.icon}</div>
                <Card.Title className="career-card-title">{opportunity.title}</Card.Title>
                <Card.Text className="career-card-text">{opportunity.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurPrograms;
