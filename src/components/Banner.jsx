


// import React from "react";
// import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import "./banner.css"; // Link the external CSS file

// const HeroSection = () => {
//   const phoneNumber = "+1234567890";
//   return (
//     <Container fluid className="py-3" style={{ backgroundColor: "#f8f9fa" }}>
//       <Row className="align-items-center">
//         {/* Text and Image Section for Mobile */}
//         <Col md={6} className="text-center text-md-start mobile-flex">
//           <h1 className="fw-bold" >Welcome To Tathastu</h1>
//           <h2 className="fw-light">Bridge the Gap Between Learning and Growth.</h2>
//           <div className="hero-image-container d-block d-md-none">
//             <Image
//               src="/Images/young-student.jpg"
//               alt="Learning Hero"
//               fluid
//               rounded
//               loading="lazy" 
//               className="mb-3"
              
//               style={{ marginTop: "1.5rem" }}
//             />
//           </div>
//           <p className="secondary-h2" style={{ fontSize: "1.6rem" }}>
//             Empowering students to embrace their strengths and achieve their dreams.
//           </p>
//           <a href={`tel:${phoneNumber}`} style={{ textDecoration: "none" }}>
//             <Button
//               variant="primary"
//                 className="hover-button"
//               size="lg"
//               style={{
//                 backgroundColor:" #E34234",
//                 border: "none",
//                 width: "9rem",
//                 marginTop: "2rem",
                
//               }}
//             >
//               Join Us
//             </Button>
//           </a>
//         </Col>

//         {/* Image Section for Desktop View */}
//         <Col md={6} className="text-center d-none d-md-block">
//           <div className="position-relative hero-image-container">
//             <Image
//               src="/Images/young-student.jpg"
//               alt="Learning Hero"
//               fluid
//               rounded
//               loading="lazy" 
//               className="mb-3"
//               style={{ marginTop: "4.2rem" }}
//             />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HeroSection;





import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"; // Import the blur effect
import "./banner.css"; // Link the external CSS file

const HeroSection = () => {
  const phoneNumber = "+1234567890";

  return (
    <Container fluid className="py-3" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="align-items-center">
        {/* Text and Image Section for Mobile */}
        <Col md={6} className="text-center text-md-start mobile-flex">
          <h1 className="fw-bold">Welcome To Tathastu</h1>
          <h2 className="fw-light">Bridge the Gap Between Learning and Growth.</h2>
          <div className="hero-image-container d-block d-md-none">
            <LazyLoadImage
              src="/Images/young-student.jpg"
              alt="Learning Hero"
              effect="blur" // Adds a blur effect while loading
              className="mb-3"
              style={{ width: "100%", marginTop: "1.5rem", borderRadius: "0.25rem" }}
            />
          </div>
          <p className="secondary-h2" style={{ fontSize: "1.6rem" }}>
            Empowering students to embrace their strengths and achieve their dreams.
          </p>
          <a href={`tel:${phoneNumber}`} style={{ textDecoration: "none" }}>
            <Button
              variant="primary"
              className="hover-button"
              size="lg"
              style={{
                backgroundColor: "#E34234",
                border: "none",
                width: "9rem",
                marginTop: "2rem",
              }}
            >
              Join Us
            </Button>
          </a>
        </Col>

        {/* Image Section for Desktop View */}
        <Col md={6} className="text-center d-none d-md-block">
          <div className="position-relative hero-image-container">
            <LazyLoadImage
              src="/Images/young-student.jpg"
              alt="Learning Hero"
              effect="blur" // Adds a blur effect while loading
              className="mb-3"
              style={{
                width: "100%",
                marginTop: "4.2rem",
                borderRadius: "0.25rem",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
