import React, { useState, useContext } from "react";
import { ColorModeContext } from "../../../../services/colormode/colormode.context";
import styles from "./ScreenToggler.module.css";

export const ScreenToggler = ({ setParentState }) => {
  // import colorMode context so that the component knows which palette to render
  const { colorMode } = useContext(ColorModeContext);

  //choice determines which option is enlarged
  const [choice, setChoice] = useState(1);

  return (
    <div className={styles.toggler}>
      <button
        className={`${
          colorMode !== "light"
            ? "lightModeText lightModeHighlight"
            : "darkModeText darkModeHighlight"
        } ${!choice ? `${styles.selected}` : ""}`}
        onClick={() => {
          setChoice(0);
          setParentState("skillset");
        }}
      >
        Skillset
      </button>
      <button
        className={`${
          colorMode !== "light"
            ? "lightModeText lightModeHighlight"
            : "darkModeText darkModeHighlight"
        } ${choice ? `${styles.selected}` : ""}`}
        onClick={() => {
          setChoice(1);
          setParentState("bio");
        }}
      >
        Bio
      </button>
    </div>
  );
};
