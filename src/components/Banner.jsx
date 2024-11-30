// import React from "react";
// import { Container, Row, Col, Button, Image } from "react-bootstrap";
// import "./banner.css";

// const HeroSection = () => {
//   const phoneNumber = "+1234567890";
//   return (
//     <Container fluid className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
//       <Row className="align-items-center">
//         <Col md={6} className="text-center text-md-start mobile-flex">
//           <h1 className="fw-bold" >Welcome To School</h1>
//           <h2 className="fw-light" style={{}}>Bridge the Gap Between Learning and Growth.</h2>
//           <Image
//             src="/Images/bijnis.avif" 
//             alt="Learning Hero"
//             fluid
//             rounded
//             className="mb-3 d-block d-md-none"
//             style={{ marginTop: "1.5rem" }}
//           />
//           <p className="secondary-h2" style={{fontSize:"1.6rem"}}>
//             Empowering students to embrace their strengths and achieve their dreams.
//           </p>
//           <a href={`tel:${phoneNumber}`} style={{ textDecoration: "none" }}>
//           <Button
//             variant="primary"
//             size="lg"
//             style={{
//               backgroundColor: "#CD5C5C",
//               border: "none",
//               width: "9rem",
//               marginTop:"2rem"
//             }}
//           >
//             Join Us
//           </Button>
//           </a>
//         </Col>

//         <Col md={6} className="text-center d-none d-md-block">
//           <div className="position-relative">
//             <Image
//               src="/Images/bijnis.avif"
//               alt="Learning Hero"
//               fluid
//               rounded
//               className="mb-3"
//               style={{ marginTop: "3rem" }}
//             />
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HeroSection;






import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./banner.css"; // Link the external CSS file

const HeroSection = () => {
  const phoneNumber = "+1234567890";
  return (
    <Container fluid className="py-3" style={{ backgroundColor: "#f8f9fa" }}>
      <Row className="align-items-center">
        {/* Text and Image Section for Mobile */}
        <Col md={6} className="text-center text-md-start mobile-flex">
          <h1 className="fw-bold" >Welcome To School</h1>
          <h2 className="fw-light">Bridge the Gap Between Learning and Growth.</h2>
          <div className="hero-image-container d-block d-md-none">
            <Image
              src="/Images/port.jpg"
              alt="Learning Hero"
              fluid
              rounded
              className="mb-3"
              style={{ marginTop: "1.5rem" }}
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
                backgroundColor: "#CD5C5C",
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
            <Image
              src="/Images/port.jpg"
              alt="Learning Hero"
              fluid
              rounded
              className="mb-3"
              style={{ marginTop: "4.2rem" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
