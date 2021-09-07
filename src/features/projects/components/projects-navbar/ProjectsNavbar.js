import React, { useState } from "react";
import { ProjectIcon } from "../project-icon/ProjectIcon";
import styles from "./ProjectsNavbar.module.css";

export const ProjectsNavbar = ({ projects, setParentState }) => {
  //default to the middle item in the array being selected
  const [selected, setSelected] = useState(0);

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
                onClickFunc={() => {
                  setSelected(index);
                  setParentState(index);
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
