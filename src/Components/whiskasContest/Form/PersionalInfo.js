import React from "react";
import { Col, Form, Row } from "react-bootstrap";

function PersionalInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <h4 className="mb-4">About You</h4>
      <Row>
        <Col lg={6}>
          <Form.Group className="mb-2">
            <Form.Text className="text-danger  d-block">First Name *</Form.Text>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-2">
            <Form.Text className="text-danger  d-block">Last Name *</Form.Text>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-2">
            <Form.Text className="text-danger  d-block">
              Email Address *
            </Form.Text>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col lg={6}>
          <Form.Group className="mb-2">
            <Form.Text className="text-danger  d-block">
              Phone Number *
            </Form.Text>
            <Form.Control type="text" />
          </Form.Group>
        </Col>{" "}
        <Col lg={12}>
          <div className="form-checkbox-main-wrap mt-4">
            <div className="single-checkbox-wrap">
              <input type="checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1">
                I have read and agree to the{" "}
                <a href="!#">privacy policy statements</a> and agree to receive
                marketing emails from MARS.
              </label>
            </div>
          </div>
        </Col>{" "}
        <Col lg={12}>
          <div className="form-checkbox-main-wrap mt-4">
            <div className="single-checkbox-wrap">
              <input type="checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1">
                I have read and agree to the <a href="!#">T&Cs</a> from MARS.
              </label>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PersionalInfo;
