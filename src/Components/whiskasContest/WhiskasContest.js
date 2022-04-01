import axios from "axios";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import bgImage from "./img/bgImage.png";
import navIconActive from "./img/iconActive.svg";
import navDeIconActive from "./img/iconDeactive.svg";
import "./musicContest.scss";

const WhiskasContest = () => {
  const history = useHistory();

  const [inputField, setInputField] = useState("");
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    fileUpload: "",
    name: "",
    name2: "",
    name3: "",
    name4: "",
    name5: "",
    email: "",
    userFirstName: "",
    userLastName: "",
    phoneNumber: "",
    agreementPrivecy: "",
    agreementTandC: "",
  });

  const FormTitles = ["Sign Up", "Personal Info"];
  const handleChange = (e) => {
    setInputField(e.target.value);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setInputField(e.target.value);
    await axios.post(`http://localhost:5000/users`, formData);
    setTimeout(() => {
      history.push("/successful");
    }, 2000);
  };

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);
  return (
    <div>
      <div className="music-playerinner-wrap">
        <Container>
          <div className="music-player-inner-content-wrap">
            <div
              className="music-contest-toptitle-wrap"
              style={{ backgroundImage: `url(${bgImage})` }}
            >
              <h2>
                PURR to <span>Win</span> !
              </h2>
            </div>
            <div className="music-contest-content-wrap">
              <p>
                <b>Want to share your feline’s purr loud and proud?</b>
                <br /> Simply leave us your details and upload your cat’s best
                and most beautiful purr, and you’ll be in to win
                {/* {1 month worth free WHISKAS® Wet Food}! */}
              </p>
            </div>
            <div
              className={
                inputField
                  ? "music-contest-data-upload-wrap file-upload-proccesing"
                  : "music-contest-data-upload-wrap "
              }
            >
              <div className="content-content-main-form">
                <div className="form">
                  <div className="progressbar">
                    <div>
                      {page === 0 ? (
                        <div className="form-navbar-main-btn-area-">
                          <button className="form-navbar-main-kmgf p-0">
                            <img src={navIconActive} alt="" />
                          </button>
                          <img src={navDeIconActive} alt="" />
                          <p>Step 1 of 2 </p>
                        </div>
                      ) : page == 1 ? (
                        <div
                          className="form-navbar-main-btn-area-next"
                          onClick={() => {
                            setPage((currPage) => currPage - 1);
                          }}
                        >
                          <button className=" ">
                            <img src={navIconActive} alt="" />
                          </button>
                          <img src={navIconActive} alt="" />
                          <p>Step 2 of 2 </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <Form onSubmit={handleFormSubmit} className="form-container">
                    <div className="form-content-view">
                      {/* {PageDisplay()} */}
                      {page === 0 ? (
                        <>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-5">
                                <h4>Upload your Purr!</h4>
                                <Form.Text className="text-danger mt-5 mb-3 d-block">
                                  Share your Cat’s purr video or sound file with
                                  us! *
                                </Form.Text>
                                <Form.Control
                                  type="file"
                                  onChange={(e) => onInputChange(e)}
                                  name="fileUpload"
                                  required
                                />
                              </Form.Group>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg={6}>
                              <Form.Group className="mb-3">
                                <h4>About Your Cat</h4>
                                <Form.Text className="text-danger mt-5 mb-3 d-block">
                                  How many cat(s) do you live with? *
                                </Form.Text>
                                <Form.Select onChange={handleChange} required>
                                  <option value={2} defaultValue>
                                    2
                                  </option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  {/* <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option> */}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                          </Row>

                          {inputField == 2 ? (
                            <div>
                              <Form.Text className="text-danger mb-3 d-block">
                                What are their names? *
                              </Form.Text>
                              <Row>
                                <Col lg={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name"
                                      // value={formData.name}
                                      onBlur={(e) => onInputChange(e)}
                                    />
                                  </Form.Group>
                                </Col>{" "}
                                <Col lg={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name2"
                                      onBlur={(e) => onInputChange(e)}
                                    />
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
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name"
                                      onBlur={(e) => onInputChange(e)}
                                    />
                                  </Form.Group>
                                </Col>
                                <Col lg={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name2"
                                      onBlur={(e) => onInputChange(e)}
                                    />
                                  </Form.Group>
                                </Col>{" "}
                                <Col lg={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name3"
                                      onBlur={(e) => onInputChange(e)}
                                    />
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
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name"
                                      onBlur={(e) => onInputChange(e)}
                                    />
                                  </Form.Group>
                                </Col>
                                <Col lg={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name2"
                                      onBlur={(e) => onInputChange(e)}
                                    />
                                  </Form.Group>
                                </Col>{" "}
                                <Col lg={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name3"
                                      onBlur={(e) => onInputChange(e)}
                                    />
                                  </Form.Group>
                                </Col>{" "}
                                <Col lg={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Control
                                      type="text"
                                      placeholder="2"
                                      name="name4"
                                      onBlur={(e) => onInputChange(e)}
                                    />
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
                        </>
                      ) : page === 1 ? (
                        <div className="sign-up-container">
                          <h4 className="mb-4">About You</h4>
                          <>
                            <Row>
                              <Col lg={6}>
                                <Form.Group className="mb-2">
                                  <Form.Text className="text-danger  d-block">
                                    First Name *
                                  </Form.Text>
                                  <Form.Control
                                    type="text"
                                    name="userFirstName"
                                    onBlur={(e) => onInputChange(e)}
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={6}>
                                <Form.Group className="mb-2">
                                  <Form.Text className="text-danger  d-block">
                                    Last Name *
                                  </Form.Text>
                                  <Form.Control
                                    type="text"
                                    name="userLastName"
                                    onBlur={(e) => onInputChange(e)}
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={6}>
                                <Form.Group className="mb-2">
                                  <Form.Text className="text-danger  d-block">
                                    Email Address *
                                  </Form.Text>
                                  <Form.Control
                                    type="email"
                                    name="email"
                                    onBlur={(e) => onInputChange(e)}
                                  />
                                </Form.Group>
                              </Col>
                              <Col lg={6}>
                                <Form.Group className="mb-2">
                                  <Form.Text className="text-danger  d-block">
                                    Phone Number *
                                  </Form.Text>
                                  <Form.Control
                                    type="number"
                                    name="phoneNumber"
                                    onBlur={(e) => onInputChange(e)}
                                  />
                                </Form.Group>
                              </Col>{" "}
                              <Col lg={12}>
                                <div className="form-checkbox-main-wrap mt-4">
                                  <div className="single-checkbox-wrap">
                                    <input
                                      type="checkbox"
                                      id="checkbox-1"
                                      name="agreementPrivecy"
                                      onChange={(e) => onInputChange(e)}
                                    />
                                    <label htmlFor="checkbox-1">
                                      I have read and agree to the{" "}
                                      <a href="!#">privacy policy statements</a>{" "}
                                      and agree to receive marketing emails from
                                      MARS.
                                    </label>
                                  </div>
                                </div>
                              </Col>{" "}
                              <Col lg={12}>
                                <div className="form-checkbox-main-wrap mt-4">
                                  <div className="single-checkbox-wrap">
                                    <input
                                      type="checkbox"
                                      id="checkbox-1"
                                      name="agreementTandC"
                                      onChange={(e) => onInputChange(e)}
                                    />
                                    <label htmlFor="checkbox-1">
                                      I have read and agree to the{" "}
                                      <a href="!#">T&Cs</a> from MARS.
                                    </label>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mt-5">
                      {page == 0 ? (
                        <div className="form-navbar-main-btn-area">
                          <p
                            className="next-form-button-fmgfd"
                            onClick={() => {
                              if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                              } else {
                                setPage((currPage) => currPage + 1);
                              }
                            }}
                          >
                            {page === FormTitles.length - 1 ? "Submit" : "Next"}
                          </p>
                        </div>
                      ) : page == 1 ? (
                        <div className="form-navbar-main-btn-area next">
                          <button
                            className="preview-back-btn"
                            disabled={page == 0}
                            onClick={() => {
                              setPage((currPage) => currPage - 1);
                            }}
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            onClick={() => {
                              if (page === FormTitles.length - 1) {
                                // alert("FORM SUBMITTED");
                                // console.log(formData);
                                setFormData(formData);
                              } else {
                                setPage((currPage) => currPage + 1);
                              }
                            }}
                          >
                            {page === FormTitles.length - 1
                              ? "Put my best PURR forward"
                              : "Next"}
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="add-form-next-data-area mt-5">
                      {page == 1 ? (
                        <p>
                          Disclaimer: By submitting this form I confirm that I’m
                          14 or over.
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhiskasContest;
