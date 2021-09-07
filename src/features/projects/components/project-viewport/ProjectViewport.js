import React, { useContext } from "react";
import { ColorModeContext } from "../../../../services/colormode/colormode.context";
import styles from "./ProjectViewport.module.css";

export const ProjectViewport = ({ source, href }) => {
  const { colorMode } = useContext(ColorModeContext);

  return (
    <div
      className={`${styles.outerContainer} ${
        colorMode === "light" ? styles.borderLM : styles.borderDM
      }`}
    >
      {href !== "no link" ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div
            className={styles.innerContainer}
            style={{ backgroundImage: `url(${source})` }}
          ></div>
        </a>
      ) : (
        <div
          className={styles.innerContainer}
          style={{ backgroundImage: `url(${source})` }}
        ></div>
      )}
    </div>
  );
};
