import React from "react";
import Vertical from "../Horizontal/Vertical";
import "./about.css";

const About = () => {
  return (
    <div id="about" className="container section">
      <h2>About Me</h2>
      <div className="about_inner_container">
          <p className="left-side">
            Hello dear visitor! I am a web developer and I am passionate about developing games and web applications. I am a self-taught developer and I am always looking for new challenges. I am also a third year student at Ankara University studying computer engineering. I am also trainee at Google Game and Application Academy.
            <br />
            <br />
            My main focus is to be involved in creative, innovative projects that will help me grow as a developer and as a person. I am always looking for new opportunities to learn and grow.
          </p>
        <Vertical width={1} height="200" color="white" />
      </div>
    </div>
  );
};

export default About;
