import React, { useState } from "react";
import htmlIcon from "../../../../assets/images/html-icon.png";
import { ProjectIcon } from "../project-icon/ProjectIcon";
import styles from "./ProjectsNavbar.module.css";

export const ProjectsNavbar = ({ projects }) => {
  //default to the middle item in the array being selected
  const [selected, setSelected] = useState(Math.floor(projects.length / 2));

  return (
    <div className={styles.projectsNav}>
      <ul>
        {projects.map((project, index) => {
          return (
            <li
              key={`${project.name}-${index}`}
              className={`${styles.icon} ${
                selected === index ? styles.selected : ""
              }`}
            >
              <ProjectIcon
                source={project.image}
                onClickFunc={() => setSelected(index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
