import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./learningoutcomes.css";

const LearningOutcomes = () => {
  const videos = [
    {
      id: 1,
      title: "Understanding React",
      description: "Learn the basics of React and build dynamic UIs.",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Advanced React Concepts",
      description: "Dive deeper into hooks, context, and state management.",
      link: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
      id: 3,
      title: "React and APIs",
      description: "Learn how to integrate REST APIs with React applications.",
      link: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      id: 4,
      title: "React Deployment",
      description: "Step-by-step guide to deploying your React app.",
      link: "https://www.youtube.com/embed/Zrt77f7nTqY",
    },
  ];

  return (
    <Container fluid className="learning-outcomes py-4">
      <h1 className="learning-title text-start mb-4 " style={{color:"black"}}>Learning Outcomes</h1>
      <Row className="g-4">
        {videos.map((video) => (
          <Col
            key={video.id}
            xs={12}
            sm={6}
            md={6}
            lg={3}
            className="d-flex justify-content-center"
          >
            <div className="video-box text-center p-3">
              <iframe
                width="100%"
                height="150"
                src={video.link}
                title={`YouTube Video ${video.id}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h5 className="video-title mt-3 fw-bold">{video.title}</h5>
              <p className="video-description text-muted">{video.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LearningOutcomes;
