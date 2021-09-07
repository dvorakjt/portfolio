import React from "react";
import styles from "./ProjectIcon.module.css";

//clickable icon to display within projects taskbar
export const ProjectIcon = ({ source, onClickFunc, style }) => {
  return (
    <button
      style={{
        border: "none",
        backgroundImage: `url(${source})`,
        ...style,
      }}
      className={styles.projectIcon}
      onClick={onClickFunc}
    ></button>
  );
};
