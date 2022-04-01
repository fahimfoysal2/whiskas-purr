import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainFooter from "../../Common/Footer/MainFooter";
import MainHeader from "../../Common/Header/MainHeader";
import successfulImage from "./successful.png";
import "./successfull.scss";
const Successful = () => {
  return (
    <div>
      <MainHeader />
      <div className="">
        <Container>
          <div className="successful-page">
            <img src={successfulImage} alt="" />
            <div className="successful-content-wrap">
              <h4>Your Purr has been delivered!</h4>
              <p>
                Thanks for participating in Purr More with WHISKAS®.We’ll be in
                touch with you when we announce the winner! Good luck!
              </p>
              <Link to="/">Back to Purr More page</Link>
            </div>
          </div>
        </Container>
      </div>
      <MainFooter />
    </div>
  );
};

export default Successful;
