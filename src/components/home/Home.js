import React from "react";
import Data from "./Data";
import "./home.css";
import Social from "./Social";

const Home = () => {
  return (
    <section id="home" className="section">
      <div className="home container grid">
        <Social />
        <div className="home-img"></div>
        <Data />
      </div>
    </section>
  );
};

export default Home;
