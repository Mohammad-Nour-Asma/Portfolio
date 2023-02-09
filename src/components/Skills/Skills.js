import React from "react";
import { MdOutlineDoneOutline } from "react-icons/md";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <h1 className="section__title">Skills</h1>
      <h2 className="section__subtitle">My technical level</h2>
      <div className="container skills-cont">
        <div className="skills-box">
          <h3>Frontend developer</h3>
          <div className="all-skills">
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>HTML</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>CSS</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Javascript</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Bootstrap</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Tailwind</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Sass</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>React</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Redux</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Next js</span>
                <span className="level">Basic</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Typescript</span>
                <span className="level">Basic</span>
              </div>
            </div>
          </div>
        </div>
        <div className="skills-box">
          <h3>Backend developer</h3>
          <div className="all-skills">
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Php</span>
                <span className="level">Basic</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Laravel</span>
                <span className="level">intermediate</span>
              </div>
            </div>
            <div className="skill">
              <div>
                <MdOutlineDoneOutline />
              </div>
              <div>
                <span>Mysql</span>
                <span className="level">intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
