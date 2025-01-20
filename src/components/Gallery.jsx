// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import "./gallery.css"; 

// const Gallery = () => {
//   return (
//     <Container fluid className="gallery-py-4" style={{backgroundColor:"		#FFFAFA",marginTop:"1rem"}}>
//       <h1 className="text-center mb-5" style={{ color: "black" }}>
//         Our Event Gallery
//       </h1>
//       <Row className="g-4">
//         <Col xs={12} sm={6} md={4}>
//           <Image src="/Images/child1.jpg" alt="Event 1" fluid rounded loading="lazy"  />
//         </Col>
//         <Col xs={12} sm={6} md={4}>
//           <Image src="/Images/child2.jpg" alt="Event 2" fluid rounded  loading="lazy" />
//         </Col>
//         <Col xs={12} sm={6} md={4}>
//           <Image src="/Images/child3.jpg" alt="Event 3" fluid rounded loading="lazy" />
//         </Col>
//         <Col xs={12} sm={6} md={4}>
//           <Image src="/Images/child4.jpg" alt="Event 4" fluid rounded loading="lazy"  />
//         </Col>
//         <Col xs={12} sm={6} md={4}>
//           <Image src="/Images/child1.jpg" alt="Event 5" fluid rounded loading="lazy" />
//         </Col>
//         <Col xs={12} sm={6} md={4}>
//           <Image src="/Images/child2.jpg" alt="Event 6" fluid rounded loading="lazy" />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Gallery;







import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the blur effect
import "./gallery.css"; // For additional custom styling

const Gallery = () => {
  return (
    <Container fluid className="gallery-py-4" style={{ backgroundColor: "#FFFAFA", marginTop: "1rem" }}>
      <h1 className="text-center mb-5" style={{ color: "black" }}>
        Our Event Gallery
      </h1>
      <Row className="g-4">
        <Col xs={12} sm={6} md={4}>
          <LazyLoadImage
            src="/Images/child1.jpg"
            alt="Event 1"
            effect="blur" // Optional: Adds a blur effect while loading
            className="mb-3"
            style={{
              borderRadius: "0.25rem", // Keeps the rounded corners as before
              width: "100%", // Ensures the image takes the full width of the column
              height: "auto", // Maintains the aspect ratio
            }}
            loading="lazy"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <LazyLoadImage
            src="/Images/child2.jpg"
            alt="Event 2"
            effect="blur"
            className="mb-3"
            style={{
              borderRadius: "0.25rem",
              width: "100%",
              height: "auto",
            }}
            loading="lazy"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <LazyLoadImage
            src="/Images/child3.jpg"
            alt="Event 3"
            effect="blur"
            className="mb-3"
            style={{
              borderRadius: "0.25rem",
              width: "100%",
              height: "auto",
            }}
            loading="lazy"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <LazyLoadImage
            src="/Images/child4.jpg"
            alt="Event 4"
            effect="blur"
            className="mb-3"
            style={{
              borderRadius: "0.25rem",
              width: "100%",
              height: "auto",
            }}
            loading="lazy"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <LazyLoadImage
            src="/Images/child1.jpg"
            alt="Event 5"
            effect="blur"
            className="mb-3"
            style={{
              borderRadius: "0.25rem",
              width: "100%",
              height: "auto",
            }}
            loading="lazy"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <LazyLoadImage
            src="/Images/child2.jpg"
            alt="Event 6"
            effect="blur"
            className="mb-3"
            style={{
              borderRadius: "0.25rem",
              width: "100%",
              height: "auto",
            }}
            loading="lazy"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
