import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./blogs.css";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "Innovating the Future of Education",
      image: "/images/ftre.png",
      description:
        "Discover how technology and creativity are reshaping the way students learn and grow.",
    },
    {
      id: 2,
      title: "Fostering Student Success",
      image: "/images/blog2.jpg",
      description:
        "Learn how nurturing environments and innovative techniques enhance student performance.",
    },
    {
      id: 3,
      title: "Adapting to Modern Challenges",
      image: "/images/blog3.jpg",
      description:
        "Understand how schools can adapt to overcome modern challenges in education.",
    },
  ];

  return (
    <Container fluid className="zigzag-blog-section">
      <Row>
        <Col xs={12}>
          <h2 className="zigzag-title">Latest From Our Blog</h2>
        </Col>
      </Row>
      {blogs.map((blog, index) => (
        <Row
          key={blog.id}
          className={`zigzag-row ${
            index % 2 === 0 ? "zigzag-left" : "zigzag-right"
          }`}
        >
          <Col xs={12} md={6} className="zigzag-image-column">
            <Image
              src={blog.image}
              alt={blog.title}
              fluid
              className="zigzag-image"
            />
          </Col>
          <Col xs={12} md={6} className="zigzag-text-column">
            <div className="zigzag-text-wrapper">
              <h3 className="zigzag-blog-title">{blog.title}</h3>
              <p className="zigzag-blog-description">{blog.description}</p>
              <button className="zigzag-read-more">Read More</button>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default BlogSection;
