import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import LinkedIn from "../../img/linkedin.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Jay94588@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/yadavanshi.jay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
          <a
            href="https://github.com/jay-kumar-yadav"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
