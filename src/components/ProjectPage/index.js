import React, { useState } from "react";
import "./projectPage.css";
import zomatoClone from "../../images/zomato-clone.png";
import credClone from "../../images/cred-clone.png";
import memeGenerator from "../../images/meme-generator.png";
import ProjectText from "./ProjectText";

function ProjectPage() {
  const projectData = [
    {
      name: "Zomato Clone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt, qui explicabo sint quod dolore iure odio nostrum earum obcaecati magnam, expedita labore placeat deleniti enim nobis repellat, veniam ea?",
      link: "https://rahul-rdb.github.io/zomato-clone/",
      lapimage: zomatoClone,
    },
    {
      name: "CRED Clone",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt, qui explicabo sint quod dolore iure odio nostrum earum obcaecati magnam, expedita labore placeat deleniti enim nobis repellat, veniam ea?",
      link: "https://rahul-rdb.github.io/cred-clone/",
      lapimage: credClone,
    },
    {
      name: "Meme Generator",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nesciunt, qui explicabo sint quod dolore iure odio nostrum earum obcaecati magnam, expedita labore placeat deleniti enim nobis repellat, veniam ea?",
      link: "https://rahul-rdb.github.io/meme-generator/",
      lapimage: memeGenerator,
    },
  ];

  const [laptopImage, setlaptopImage] = useState(0);

  return (
    <div className="project-screen-wrapper">
      <div className="project-screen max-width flex">
        <div className="screen-display-wrapper">
          {projectData.map((project, i) => (
            <div className="screen-display">
              <ProjectText
                project={project}
                i={i}
                setlaptopImage={setlaptopImage}
              />
            </div>
          ))}
        </div>

        <div className="laptop-screen-wrapper">
          <div className="laptop-screen">
            <div className="laptop-screen-display flex absolute-center">
              <a
                href={projectData[laptopImage].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={projectData[laptopImage].lapimage}
                  alt="project-img"
                  key={projectData[laptopImage].lapimage}
                  className="project-image slide-in-right"
                />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
