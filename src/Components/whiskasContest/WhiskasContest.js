import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MainForm from "./Form/MainForm";
import bgImage from "./img/bgImage.png";
import "./musicContest.scss";
const WhiskasContest = () => {
  const [inputField, setInputField] = useState("");
  const handleChange = (e) => {
    setInputField(e.target.value);
  };

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
              {/* <div className="contest-navbar-icon">
                <span>
                  <img src={activeIcon} alt="" />
                  <img src={deActiveIcon} alt="" />
                </span>
                <p>Step 1 of 2</p>
              </div> */}
              <div className="content-content-main-form">
                <MainForm />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhiskasContest;
