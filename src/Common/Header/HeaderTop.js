import React from "react";
import { Container } from "react-bootstrap";
import mainLogo from "./img/logo.svg";
const HeaderTop = () => {
  return (
    <div className="header-top-main-wrap">
      <Container>
        <div className="header-top-inner-wrap">
          <img src={mainLogo} alt="" />
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
