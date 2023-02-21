import React from "react";
import Horizontal from "../Horizontal/Horizontal";
import "./contact.css";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact" className="container contact_section">
      <h2>Contact Me</h2>

      <Social width="30" name="mail" link="mailto:sametatacjs@gmail.com"/>
      <Social width="50" name="linkedin" link="https://www.linkedin.com/in/sametatac/"/>
      <Social width="30" name="github" link="https://github.com/sametjr"/>
      <Social width="50" name="instagram" link="https://www.instagram.com/samet.jr/"/>
      <Social width="30" name="whatsapp" link="https://wa.me/5536971468"/>
    </div>
  );
};

const Social = (props) => {
  return (
    <div className="social">
      <Horizontal width={props.width} height={1} color="white" />
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.name === "linkedin" ? (
          <BsLinkedin className="social_icon" />
        ) : props.name === "github" ? (
          <BsGithub className="social_icon" />
        ) : props.name === "instagram" ? (
          <FaInstagramSquare className="social_icon" />
        ) : props.name === "whatsapp" ? (
          <FaWhatsappSquare className="social_icon" />
        ) : props.name === "mail" ? (
          <AiFillMail className="social_icon" />
        ) : (
          <BsLinkedin className="social_icon" />
        )}
      </a>
    </div>
  );
};

export default Contact;
