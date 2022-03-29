import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import bgImage from "./img/bgImage.png";
import activeIcon from "./img/iconActive.svg";
import deActiveIcon from "./img/iconDeactive.svg";
import "./musicContest.scss";
const WhiskasContest = () => {
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
            <div className="music-contest-data-upload-wrap">
              <div className="contest-navbar-icon">
                <span>
                  <img src={activeIcon} alt="" />
                  <img src={deActiveIcon} alt="" />
                </span>
                <p>Step 1 of 2</p>
              </div>
              <div className="content-content-main-form">
                <Form>
                  <Form.Group className="mb-5">
                    <h4>Upload your Purr!</h4>
                    <Form.Text className="text-danger my-5 d-block">
                      Share your Cat’s purr video or sound file with us! *
                    </Form.Text>
                    <Form.Control type="file" />
                  </Form.Group>{" "}
                  <Form.Group>
                    <h4>About Your Cat</h4>
                    <Form.Text className="text-danger my-5 d-block">
                      How many cat(s) do you live with? *
                    </Form.Text>{" "}
                    <Form.Select>
                      <option>Cat</option>
                      <option>Cat</option>
                      <option>Cat</option>
                    </Form.Select>
                  </Form.Group>
                  <div className="mt-5 text-center">
                    <Form.Text className="text-danger my-5 d-block">
                      Please complete the required fields!
                    </Form.Text>
                  </div>
                  <div className="submit-contenst-button-bottom">
                    <Button variant="warning">Next</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhiskasContest;
