import React from "react";
import "./navigation.css";
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineContacts } from "react-icons/ai";
 
const Navigation = () => {
  return (
    <div className="navigation_container">
      <NavigationItem icon={AiOutlineHome} link="#home" />
      <NavigationItem icon={BsInfoSquare} link="#about" />
      <NavigationItem icon={GiTechnoHeart} link="#technologies" />
      <NavigationItem icon={AiOutlineProject} link="#projects" />
      <NavigationItem icon={AiOutlineContacts} link="#contact" />
    </div>
  );
};

const NavigationItem = (props) => {
  return (
    <a className="icon_container" href={props.link}>
      {<props.icon />}
    </a>
  );
};

export default Navigation;
