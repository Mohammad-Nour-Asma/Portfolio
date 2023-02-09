import React from "react";
import { HiArrowNarrowDown } from "react-icons/hi";

const ScrollDown = () => {
  return (
    <a href="#about" className="scroll-down">
      Scroll down
      <span>
        <HiArrowNarrowDown />
      </span>
    </a>
  );
};

export default ScrollDown;
