import React from "react";
import "./header.scss";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
const MainHeader = () => {
  return (
    <div>
      <div>
        <HeaderTop />
        <HeaderBottom />
      </div>
    </div>
  );
};

export default MainHeader;
