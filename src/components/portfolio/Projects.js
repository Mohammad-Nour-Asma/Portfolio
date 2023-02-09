import React from "react";
import { projectsData } from "./projectsData";
import { BsArrowRightShort } from "react-icons/bs";
import "./portfolio.css";

const Projects = ({ type }) => {
  console.log(type);
  return (
    <div className="projects">
      {projectsData.map((item) => {
        if (item.category === type || type === "all") {
          return (
            <a
              target="_blank"
              rel="noreferrer"
              key={item.id}
              href={item.link}
              className="project"
            >
              <div className="project-img">
                <img src={item.img} alt="project_image" />
              </div>
              <div className="project-title">{item.title}</div>
              <div className="tools">
                {item.tools.map((item, index) => {
                  return <span key={index}>{item}</span>;
                })}
              </div>
              <div className="demo">
                Demo{" "}
                <span className="demo-icon">
                  <BsArrowRightShort />
                </span>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
};

export default Projects;
