// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./whychoose.css";

// const WhyChoose = () => {
//   const features = [
//     { title: "Expert Guidance", description: "Professional advice tailored to your goals.this is the issue i never face.so what i do here.i just want to meet the people where peoples meet to their path" },
//     { title: "Personalized Plans", description: "Customized counseling for every student." },
//     { title: "Proven Success", description: "Track record of exceptional results." },
//     { title: "Compassionate Support", description: "We care about your emotional well-being." },
//     { title: "Career Focused", description: "Helping you achieve your career aspirations." },
//     { title: "Affordable Services", description: "Quality guidance within your budget." },
//   ];

//   return (
//     <Container fluid className="py-4" style={{ backgroundColor: "#f8f9fa", }}>
//       <h1 className="text-center mb-4 fw-bold">Why Choose Us?</h1>
//       <Row>
//         {features.map((feature, index) => (
//           <Col
//             key={index}
//             xs={12}
//             sm={6}
//             md={4}
//             className="d-flex justify-content-center my-3"
//           >
//             <div className="feature-card p-4">
//               <h4 className="feature-title">{feature.title}</h4>
//               <p className="feature-description">{feature.description}</p>
//             </div>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default WhyChoose;






import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./whychoose.css";

const WhyChoose = () => {
  const features = [
    { title: "School Admissions", description: "Professional advice tailored to your goals.there are so many schools.why we chooe you" },
    { title: "Websites", description: "Customized counseling for every student." },
    { title: "Social Media Management", description: "Track record of exceptional results." },
    { title: "School Management Software", description: "We care about your emotional well-being." },
    { title: "Setup SmartClass Room", description: "Helping you achieve your career aspirations." },
    { title: "Academic Improvement Programs", description: "Quality guidance within your budget.there is computer sciencw bathch to the dsddv" },
  ];

  return (
    <Container fluid className="why-choose-container py-4" id='Our-Programs' style={{ backgroundColor: "#f8f9fa" }}>
      <h1 className="text-center mb-4 " style={{fontSize:"2.5rem",color:"black"}}>Our Services</h1>
      <Row>
        {features.map((feature, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="d-flex justify-content-center my-3">
            <div className="feature-card p-4">
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChoose;
