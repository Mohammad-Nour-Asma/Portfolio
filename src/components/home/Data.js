import React from "react";
import { TbSend } from "react-icons/tb";
import ScrollDown from "./ScrollDown";

const Data = () => {
  return (
    <div className="info">
      <h1 className="home-title ">Nour Asma</h1>
      <h3 className="home-subtitle">Front-End Web Developer</h3>
      <p className="home-description">
        I'm front-end web developer based in damascus, and I'm very passionate
        and dedicated to my work.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <span className="icon">
          <TbSend />
        </span>
      </a>
      <ScrollDown />
    </div>
  );
};

export default Data;
