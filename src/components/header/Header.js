import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdSend, IoIosCloseCircle } from "react-icons/io";
import {
  BsFillPersonFill,
  BsBagFill,
  BsFileEarmarkRichtext,
  BsImages,
} from "react-icons/bs";
import "./header.css";

const Header = () => {
  const [showMenue, setShowMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="logo">
          Nour Asma
        </a>
        <div className={showMenue ? "show-menu nav-menu" : "nav-menu"}>
          <button
            onClick={() => {
              setShowMenu(false);
            }}
            className="close-icon"
          >
            <IoIosCloseCircle />
          </button>
          <ul className="links">
            <li>
              <a href="#home">
                <span className="nav-icon">
                  <AiOutlineHome />
                </span>
                Home
              </a>
            </li>
            <li>
              <a href="#about">
                <span className="nav-icon">
                  <BsFillPersonFill />
                </span>
                About
              </a>
            </li>
            <li>
              <a href="#skills">
                <span className="nav-icon">
                  <BsFileEarmarkRichtext />
                </span>
                Skills
              </a>
            </li>

            <li>
              <a href="#portfolio">
                <span className="nav-icon">
                  <BsImages />
                </span>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact">
                <span className="nav-icon">
                  <IoMdSend />
                </span>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="toggle-menu"
        >
          <CgMenuGridR />
        </button>
      </nav>
    </header>
  );
};

export default Header;
