import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MainFooter = () => {
  return (
    <div>
      <div className="footer-top-main-wrap">
        <Container>
          <div className="footer-top-inner-wrap">
            <Row>
              <Col lg={6}>
                <div className="footer-top-single-item">
                  <h3>
                    WHISKAS <sup>&reg;</sup>
                  </h3>
                  <ul>
                    <li>About Us</li>
                    <li>Site Owner</li>
                    <li>FAQs</li>
                    <li>Whats New</li>
                    <li>Cat Breeds</li>
                  </ul>
                </div>
              </Col>
              <Col lg={6}>
                <div className="footer-top-single-item">
                  <h3>Our Products</h3>
                  <ul>
                    <li>Kitten</li>
                    <li>Adult</li>
                    <li>Senior</li>
                    <li>Milk Plus</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="footer-bottom-main-wrap">
        <Container>
          <div className="footer-top-inner-wrap">
            <Row>
              <Col lg={6}>
                <div className="footer-top-single-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, illo!
                  </p>
                </div>
              </Col>
              <Col lg={6}>
                <div className="footer-top-single-item">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, illo!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MainFooter;
