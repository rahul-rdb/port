import React from "react";
import "./toolspage.css";

function ToolsPage() {
  return (
    <div className="tools-bg">
      <div className="tools-wrapper flex flex-col max-width">
        <div className="tools">
          <p>Languages: JavaScript, HTML/CSS</p>
          <p>Frameworks/Libraries: React, Redux Toolkit-Query, ExpressJs</p>
          <p>Databases: MongoDB, Firebase</p>
          <p>UI Libraries/Frameworks: BootStrap, Material UI, Tailwind CSS</p>
          <p>Developer Tools: Git, GitHub, VS Code, Postman</p>
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
