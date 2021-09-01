import React, { useContext, useState } from "react";
import { ColorModeContext } from "../services/colormode/colormode.context";
import { AnimationContext } from "../services/animation/animation.context";
import styles from "./ColorToggler.module.css";

export const ColorToggler = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  return (
    <div className={styles.toggler}>
      <label
        className={`${styles.label} ${
          colorMode === "light" ? "lightModeText" : "darkModeText"
        }`}
        for="color-toggler"
      >
        TOGGLE ME!
      </label>
      <label className={styles.switch}>
        <input
          type="checkbox"
          id="color-toggler"
          onChange={() => {
            setColorMode(colorMode === "light" ? "dark" : "light");
          }}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
