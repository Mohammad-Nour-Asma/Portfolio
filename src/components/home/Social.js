import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  return (
    <div className="socials">
      <a
        href="https://www.facebook.com/mohammed.asma.18/"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.linkedin.com/in/nour-asma-649245256/"
        target="_blank"
        rel="noreferrer"
      >
        <RxLinkedinLogo />
      </a>
      <a
        href="https://github.com/Mohammad-Nour-Asma"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
  );
};

export default Social;
