import React from "react";

const Box = ({ icon, title, standerd }) => {
  return (
    <div className="about-box">
      <span className="about-icon">{icon}</span>
      <h4>{title}</h4>
      <h5>{standerd}</h5>
    </div>
  );
};

export default Box;
