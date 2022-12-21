import React from "react";
import "./toolspage.css";

function ToolsPage() {
  return (
    <div className="tools-bg">
      <div className="tools-wrapper flex flex-col max-width">
        <div className="tools">
          <p>Languages: HTML, CSS, JavaScript</p>
          <p>Frameworks: ReactJs, Redux </p>
          <p>UI library: Material UI, Bootstrap</p>
          <p>Tools: Git, GitHub, VS code, Firebase</p>
          <p>Other: AutoCAD, Solidworks(basics)</p>
          <p>Language Spoken: English, Hindi, Marathi</p>
        </div>
        <div className="exp">
          Experience: I have previous working experience in Manufacturing Field.
        </div>
      </div>
      <div className="footer flex max-width">By Rahul DB</div>
    </div>
  );
}

export default ToolsPage;
