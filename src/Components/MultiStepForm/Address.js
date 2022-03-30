import { Button } from "antd";
import { Formik } from "formik";
import { Input } from "formik-antd";
import React, { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import MultiStepFormContext from "./MultiStepFormContext";
const Details = () => {
  const { address, setAddress, next, prev } = useContext(MultiStepFormContext);
  return (
    <Formik
      initialValues={address}
      onSubmit={(values) => {
        setAddress(values);
        next();
      }}
      validate={(values) => {
        const errors = {};
        if (!values.address1) errors.address1 = "Address is required";
        if (!values.city) errors.city = "City is required";
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => {
        return (
          <div className={"details__wrapper"}>
            <Row>
              <Col lg={6}>
                {" "}
                <div
                  className={`form__item ${errors.address1 && "input__error"}`}
                >
                  <label>First Name *</label>
                  <Input name={"address1"} className="form-control" />
                  <p className={"error__feedback"}>{errors.address1}</p>
                </div>
              </Col>
              <Col lg={6}>
                {" "}
                <div className={`form__item`}>
                  <label>Last Name</label>
                  <Input name={"address2"} className="form-control" />
                </div>
              </Col>
              <Col lg={6}>
                {" "}
                <div className={`form__item ${errors.city && "input__error"}`}>
                  <label>Email *</label>
                  <Input name={"city"} type="email" className="form-control" />
                  <p className={"error__feedback"}>{errors.city}</p>
                </div>
              </Col>{" "}
              <Col lg={6}>
                {" "}
                <div className={`form__item ${errors.city && "input__error"}`}>
                  <label>Phone Number *</label>
                  <Input name={"city"} type="number" className="form-control" />
                  <p className={"error__feedback"}>{errors.city}</p>
                </div>
              </Col>
              <div className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={`I have read and agree to the privacy policy statements and agree to receive marketing emails from MARS`}
                />
              </div>{" "}
              <div className="mb-3">
                <Form.Check
                  type="checkbox"
                  label={`I have read and agree to the T&Cs from MARS.`}
                />
              </div>
              <Col lg={12}>
                {" "}
                <div
                  className={
                    "form__item button__items d-flex justify-content-between"
                  }
                >
                  <Button
                    type={"default"}
                    className="btn btn-outline-danger"
                    onClick={prev}
                  >
                    Back
                  </Button>
                  <Button
                    type={"primary"}
                    className="btn btn-warning"
                    onClick={handleSubmit}
                  >
                    Put my best PURR forward
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        );
      }}
    </Formik>
  );
};
export default Details;
