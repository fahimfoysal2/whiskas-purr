import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import mainLogo from "./img/logo.svg";
const HeaderTop = () => {
  return (
    <div className="header-top-main-wrap">
      <Container>
        <div className="header-top-inner-wrap">
          <Link to="/">
            <img src={mainLogo} alt="" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
