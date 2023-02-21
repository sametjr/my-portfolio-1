import React, { useState } from "react";
import { FaUnity } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { ImHtmlFive2 } from "react-icons/im";
import { DiCss3Full } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { DiJava } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { DiIllustrator } from "react-icons/di";
import { SiBlender } from "react-icons/si";
import PlasticWhite from "../../assets/plastic-white.png";
import PlasticBlack from "../../assets/plastic-black.png";
import "./technologies.css";

const Technologies = () => {
  const [Plastic, setPlastic] = useState(PlasticWhite);
  let PutBlackIcon = () => {
    setPlastic(PlasticBlack);
    console.log("hola");
  };
  let PutWhiteIcon = () => {
    console.log("adios");
    setPlastic(PlasticWhite);
  };

  const icons = [
    FaUnity,
    SiCsharp,
    ImHtmlFive2,
    DiCss3Full,
    DiJavascript1,
    FaReact,
    AiFillGithub,
    DiJava,
    FaPython,
    DiPhotoshop,
    DiIllustrator,
    SiBlender,
  ];

  return (
    <div id="technologies" className="container tech_section">
      <h2>Technologies I know</h2>
      <div className="icons_container">

        {icons.map((Icon, index) => {
          return (
            <div key={index} className="tech_card">
                <Icon />
            </div>
          );
        })}
        <div className="tech_card" onMouseOver={PutBlackIcon} onMouseOut={PutWhiteIcon}>
            <img className="plastic_img" src={Plastic} alt=""/>
        </div>

      </div>
    </div>
  );
};

export default Technologies;
