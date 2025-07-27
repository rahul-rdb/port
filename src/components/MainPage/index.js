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
          <p className="text-small">
            🚧 This is my old portfolio – A new one is in progress! 🚀
          </p>
          <p>
            <b>
              Hi, I’m Rahul 👋. I’m a Frontend & Mobile App Developer with 2
              years of experience building scalable web and cross‑platform
              mobile applications.
            </b>
          </p>
          <p className="para">
            I specialize in React, React Native & Next-js, creating intuitive
            UIs and seamless user experiences.
          </p>
          <p className="para">
            At Archstore Tech Solutions, I’ve developed and deployed
            production‑ready apps on both the App Store and Play Store, built
            admin dashboards, and optimized application performance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
