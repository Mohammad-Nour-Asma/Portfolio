import React, { useState } from "react";
import Projects from "./Projects";

const Portfolio = () => {
  const [type, setType] = useState("all");
  return (
    <section id="portfolio" className="section portfolio">
      <h1 className="section__title">Portfolio</h1>
      <h2 className="section__subtitle">Most recent work</h2>
      <div className="container portfolio-cont">
        <div className="buttons">
          <button
            className={type === "all" ? "cate-button active" : "cate-button"}
            onClick={() => {
              setType("all");
            }}
          >
            All
          </button>
          <button
            className={type === "front" ? "cate-button active" : "cate-button"}
            onClick={() => {
              setType("front");
            }}
          >
            FrontEnd
          </button>
          <button
            className={type === "back" ? "cate-button active" : "cate-button"}
            onClick={() => {
              setType("back");
            }}
          >
            Backend
          </button>
          <button
            className={type === "full" ? "cate-button active" : "cate-button"}
            onClick={() => {
              setType("full");
            }}
          >
            Full-Stack
          </button>
        </div>
        <Projects type={type} />
      </div>
    </section>
  );
};

export default Portfolio;
