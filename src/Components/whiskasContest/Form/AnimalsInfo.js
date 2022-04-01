import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";

function AnimalsInfo({ formData, setFormData }) {
  const [inputField, setInputField] = useState("");
  const handleChange = (e) => {
    setInputField(e.target.value);
  };
  return (
    <Form>
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
        <Form.Select onChange={handleChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </Form.Select>
      </Form.Group>
      {inputField == 1 ? (
        <div>
          <Form.Text className="text-danger mb-3 d-block">
            What are their names? *
          </Form.Text>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="1" />
          </Form.Group>
        </div>
      ) : inputField == 2 ? (
        <div>
          {" "}
          <Form.Text className="text-danger mb-3 d-block">
            What are their names? *
          </Form.Text>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
          </Row>
        </div>
      ) : inputField == 3 ? (
        <div>
          {" "}
          <Form.Text className="text-danger mb-3 d-block">
            What are their names? *
          </Form.Text>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>{" "}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
          </Row>
        </div>
      ) : inputField == 4 ? (
        <div>
          {" "}
          <Form.Text className="text-danger mb-3 d-block">
            What are their names? *
          </Form.Text>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>{" "}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>{" "}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
          </Row>
        </div>
      ) : inputField == 5 ? (
        <div>
          {" "}
          <Form.Text className="text-danger mb-3 d-block">
            What are their names? *
          </Form.Text>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>{" "}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>{" "}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>{" "}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
          </Row>
        </div>
      ) : inputField == 6 ? (
        <div>
          {" "}
          <Form.Text className="text-danger mb-3 d-block">
            What are their names? *
          </Form.Text>
          <Row>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>{" "}
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="2" />
              </Form.Group>
            </Col>
          </Row>
        </div>
      ) : (
        ""
      )}
      <div className="mt-5 text-center">
        <Form.Text className="text-danger my-5 d-block">
          Please complete the required fields!
        </Form.Text>
      </div>
    </Form>
  );
}

export default AnimalsInfo;
