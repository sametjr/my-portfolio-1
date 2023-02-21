import React from "react";
import HeaderButtons from "./HeaderButtons";
import Horizontal from "../Horizontal/Horizontal";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div id="home" className="container section">
        
        <div className="intro">
          <h5>Hello and welcome to my website. I am</h5>
          <h1>SAMET ATAÇ</h1>
          <h5>Software developer.</h5>
          <div className="horizontal-line"></div>
          <Horizontal width="70" height="1px" color="#fff" />
          <Horizontal width="30" height="1px" color="#fff" />
        </div>
        <HeaderButtons />
      </div>
    </header>
  );
};

export default Header;
