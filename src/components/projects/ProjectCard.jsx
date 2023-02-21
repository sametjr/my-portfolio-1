import React from "react";
import "./projectCard.css";
import Horizontal from "../Horizontal/Horizontal";

const ProjectCard = (props) => {
  return (
    <>
      <div className="card_container">
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
        <div className="related_buttons">
          <a target="_blank" href={props.github_link} className="btn">
            CODE
          </a>
          {EditorButton(props.editor_enabled)}
          <a target="_blank" href={props.demo_link} className="btn btn-primary">
            DEMO
          </a>
        </div>
        <Horizontal width="70" height="1px" color="var(--color-orange-one)" />
        <Horizontal width="100" height="1px" color="var(--color-white)" />
      </div>
    </>
  );
};

const EditorButton = (enabled) => {
  if (!enabled) return null;
  return (
    <a
      target="_blank"
      href="https://react-level-editor.samedatac.repl.co/"
      className="btn"
    >
      EDITOR
    </a>
  );
};

export default ProjectCard;
