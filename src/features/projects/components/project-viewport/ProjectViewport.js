import React, { useContext } from "react";
import { ColorModeContext } from "../../../../services/colormode/colormode.context";
import styles from "./ProjectViewport.module.css";

export const ProjectViewport = ({ source }) => {
  const { colorMode } = useContext(ColorModeContext);

  return (
    <div
      className={`${styles.outerContainer} ${
        colorMode === "light" ? styles.borderLM : styles.borderDM
      }`}
    >
      <div
        className={styles.innerContainer}
        style={{ backgroundImage: `url(${source})` }}
      ></div>
    </div>
  );
};
