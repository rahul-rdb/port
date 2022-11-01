import React, { useState } from "react";
import { useRef, useEffect } from "react";

function ProjectText({ project, i, setlaptopImage }) {
  const [projectinfo, setprojectinfo] = useState(false);

  const ref = useRef(null);

  const handler = (e) => {
    if (e[0].isIntersecting) {
      setprojectinfo(true);
      setlaptopImage(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handler, options);
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  });

  return (
    <div
      className={`screen-text ${
        projectinfo ? "text-visible" : ""
      } flex absolute-center flex-col `}
      ref={ref}
    >
      <div className="screen-name">{project.name}</div>
      <div className="mobile-screen flex absolute-center">
        <div className="laptop-screen">
          <div className="laptop-screen-display flex absolute-center">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.lapimage}
                alt="project-img"
                key={project.lapimage}
                className="project-image slide-in-right"
              />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="screen-description">{project.description}</div> */}
      <div className="click">
        Click on the screen to open Project in new tab.
        <sup style={{ color: "red" }}>*</sup>
      </div>
    </div>
  );
}

export default ProjectText;
