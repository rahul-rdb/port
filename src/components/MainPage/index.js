import React from "react";
import "./mainPage.scss";
import profileIcon from "../../images/Profile Icon.jpg";

function MainPage() {
  return (
    <div className="bg-blue">
      <div className="main-wrapper flex absolute-center max-width">
        <div className="main-image-wrapper flex absolute-center">
          <div className="gradient-border flex absolute-center">
            <img src={profileIcon} alt="profile" className="profile-icon" />
          </div>
        </div>
        <div className="main-intro flex absolute-center flex-col">
          <p className="para">
            Hi there! My name is Rahul and I'm a self-taught developer with
            experience using the MERN stack.
          </p>
          <p className="para">
            I've built several projects using these tools and I'm passionate
            about creating engaging and dynamic web applications.
          </p>
          <p>
            <b>
              Welcome to my portfolio, Below you can explore my work and learn
              more about my skills.
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
