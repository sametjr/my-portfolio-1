import React from "react";
import Vertical from "../Horizontal/Vertical";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="container section">
      <h2>About Me</h2>
      <div className="about_inner_container">
          <p className="left-side">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            voluptas commodi similique ipsum fugiat voluptate distinctio odio
            exercitationem nam, sit non maxime unde suscipit eum, impedit
            debitis velit ex veritatis adipisci. Sunt temporibus vel ut,
            cupiditate praesentium pariatur quas debitis iure quia aliquid iste,
            expedita rerum sequi deserunt neque totam.
          </p>
        <Vertical width={1} height="200" color="white" />
      </div>
    </div>
  );
};

export default About;
