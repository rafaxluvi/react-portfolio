import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.jpeg";
import HeaderSocial from "./HeaderSocial";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Welcome, I'm</h5>
        <h1>Rafael Luviano</h1>
        <h5 className="text-light">Full-Stack Developer</h5>

        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

      </div>
    </header>
  );
};

export default Header;
