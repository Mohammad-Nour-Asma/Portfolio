import React from "react";
import profile from "../../assest/images/image.png";
import AboutData from "./AboutData";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="section about">
      <h2 className="section__title">About Me</h2>
      <h3 className="section__subtitle">My introduction</h3>
      <div className="container about-container">
        <div className="about-info">
          <div>
            <img src={profile} alt="profile" className="profile-img" />
          </div>
          <AboutData />
        </div>
      </div>
    </section>
  );
};

export default About;
