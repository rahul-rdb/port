import React from "react";
import githubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import gmailLogo from "../../images/gmail.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav-sticky">
      <div className="nav flex absolute-center flex-col">
        <a
          href="https://github.com/rahul-rdb"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link flex flex-col absolute-center"
        >
          <img src={githubLogo} alt="git-logo" className="nav-logo" />
          <p className="nav-text">GitHub</p>
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-bobade-808823255"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link flex flex-col absolute-center"
        >
          <img src={linkedinLogo} alt="linkedin-logo" className="nav-logo" />
          <p className="nav-text">LinkedIn</p>
        </a>
        <a
          href="mailto:rahulbobade26@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link flex flex-col absolute-center"
        >
          <img src={gmailLogo} alt="git-logo" className="nav-logo3" />
          <p className="nav-text3">GMail</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
