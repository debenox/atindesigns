import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="py-3">
          <Col md={3} className="py-3 text-align-center">
            <h3 className="py-3">LINKS</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/designs">House Designs</Link>
              </li>
              <li>
                <Link to="/furniture">Furniture</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="py-3 text-align-center">
            <h3 className="py-3">CONTACT US</h3>
            <ul>
              <li>
                <a href="#about">Facebook</a>
              </li>
              <li>
                <a href="#about">Instagram</a>
              </li>
              <li>
                <a href="#about">Twitter</a>
              </li>
              <li>
                <a href="#about">YouTube</a>
              </li>
            </ul>
          </Col>

          <Col md={3} className="py-3 text-align-center">
            <h3 className="py-3">SOCIAL</h3>
            <ul>
              <li>
                <a href="#about">Facebook</a>
              </li>
              <li>
                <a href="#about">Instagram</a>
              </li>
              <li>
                <a href="#about">Twitter</a>
              </li>
              <li>
                <a href="#about">YouTube</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="py-3">
            <h3 className="py-3">ATIN DESIGNS</h3>
            <p>Our Designs in your pocket</p>
          </Col>
        </Row>
        <hr />
      </Container>
      <Container>
        <Row>
          <Col className="text-center py-4">Copyright &copy; Atin.design</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
