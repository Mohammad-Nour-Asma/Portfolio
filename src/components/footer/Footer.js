import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <a href="#home" className="footer-title">
        Nour Asma
      </a>
      <div className="footer-icons">
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
      <p>Created With &#9829; by Nour Asma</p>
    </footer>
  );
};

export default Footer;
