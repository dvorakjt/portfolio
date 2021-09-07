import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { ColorModeContext } from "../../../../services/colormode/colormode.context";
import githubIcon from "../../../../assets/images/github-icon.png";
import styles from "./ProjectInfoCard.module.css";

//info card that displays markdown for each project
export const ProjectInfoCard = ({ project }) => {
  const { colorMode } = useContext(ColorModeContext);

  return (
    <div
      className={`${styles.fullCard} ${
        colorMode === "light" ? "lightMode" : "darkMode"
      }`}
    >
      {" "}
      <h6>README.md</h6>
      <hr />
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <img
          src={githubIcon}
          alt={`View ${project.name} on Github`}
          className={styles.githubIcon}
        />
      </a>
      <ReactMarkdown linkTarget="_blank">{project.readMe}</ReactMarkdown>
    </div>
  );
};
