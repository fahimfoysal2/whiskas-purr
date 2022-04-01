import React from "react";
import { Form, Row } from "react-bootstrap";

function PersionalInfo({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <Row>
        <Form.Group className="mb-5">
          <h4>Upload your Purr!</h4>
          <Form.Text className="text-danger my-5 d-block">
            Share your Cat’s purr video or sound file with us! *
          </Form.Text>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3">
          <h4>About Your Cat</h4>
          <Form.Text className="text-danger my-5 d-block">
            How many cat(s) do you live with? *
          </Form.Text>
        </Form.Group>
      </Row>
    </div>
  );
}

export default PersionalInfo;
