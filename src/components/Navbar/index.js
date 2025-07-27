import React from "react";
import githubLogo from "../../images/github-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import gmailLogo from "../../images/gmail.png";
import resume from "../../images/resume.png";
import "./navbar.css";

function Navbar() {
  return (
    <div className="nav-sticky">
      <div className="nav flex absolute-center flex-col">
        <a
          href="https://drive.google.com/file/d/1st8jrB9xwOI7RHwgy2v0h5yyoQQKWLTf/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link flex flex-col absolute-center"
          style={{ padding: "5px 3px" }}
        >
          <img src={resume} alt="git-logo" className="nav-logo3" />
          <p className="nav-text3">Resume</p>
        </a>
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
          href="https://www.linkedin.com/in/rahul-bobade"
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
          <p className="nav-text3">Gmail</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
