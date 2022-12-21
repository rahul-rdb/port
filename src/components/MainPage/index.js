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
            Hi, I'm Rahul. A self taught developer seeking for front end
            developer role, where I can enhance my skills and knowledge. I hold
            a B.E. Degree in Mechanical Engineering.
          </p>
          <p className="para">
            I have learnt Html5, CSS3 , JavaScript and React Js and in further
            process of learning nodeJs and databases.
          </p>
          <p>
            <b>Below are some projects i've build using this tools.</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
