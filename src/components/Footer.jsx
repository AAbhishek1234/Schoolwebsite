import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer py-3">
      <Container>
        <Row className="align-items-center">
          {/* Left Column: Company Info */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <h3 className="footer-logo">School</h3>
            <p className="footer-text">
              Bringing solutions that matter. Follow us on social media for updates and offers.
            </p>
            <p className="footer-text">
              <strong>Email:</strong> support@yourcompany.com <br />
              <strong>Phone:</strong> +1-234-567-890 <br />
              <strong>Location:</strong> Faridabad
            </p>
          </Col>

          {/* Middle Column: Quick Links */}
          <Col xs={12} md={4} className="text-center text-md-start mt-3 mt-md-0">
            <h6 className="footer-links-title">Quick Links</h6>
            <ul className="footer-links">
              <li>
                <a href="/about-us" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="footer-link">
                  Our Programs
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>
            </ul>
          </Col>

          {/* Right Column: Social Icons */}
          <Col xs={12} md={4} className="text-center text-md-end mt-3 mt-md-0">
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon facebook"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon twitter"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon instagram"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon youtube"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>

            {/* Created By Section */}
            <p className="footer-bottom-text mt-3">
              Created by{' '}
              <a
                href="https://Abhasys.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                Abhasys
              </a>
            </p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <p className="footer-bottom-text mb-0">
              © {new Date().getFullYear()} School. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
