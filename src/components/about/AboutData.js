import React from "react";
import { TfiMedall } from "react-icons/tfi";
import { BsBagCheck } from "react-icons/bs";
import { TbDeviceLaptop } from "react-icons/tb";
import { CgFileDocument } from "react-icons/cg";
import Box from "./Box";
const AboutData = () => {
  return (
    <div className="about-data">
      <div className="about-boxes">
        <Box title={"Experience"} standerd="2 + Years" icon={<TfiMedall />} />
        <Box
          title={"Completed"}
          standerd="13 + Projects"
          icon={<BsBagCheck />}
        />
        <Box
          title={"Support"}
          standerd="Online 24/7"
          icon={<TbDeviceLaptop />}
        />
      </div>
      <p>
        Frontend developer, I develop web pages, I have 2 years of experience
        and many clients are happy with the projects carried out
      </p>
      <a
        href="./cv/Mohammad_Nour Asma_Resume.pdf"
        download="Mohammad_Nour Asma_Resume"
      >
        <button className="button">
          Download CV{" "}
          <span className="cv-icon">
            <CgFileDocument />
          </span>
        </button>
      </a>
    </div>
  );
};

export default AboutData;
