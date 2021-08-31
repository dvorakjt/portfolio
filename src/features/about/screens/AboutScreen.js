import React, { useContext, useState } from "react";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import { AnimationContext } from "../../../services/animation/animation.context";
import { FileNav } from "../components/FileNav";
import { Toggler } from "../components/Toggler";
import styles from "./About.module.css";

export const AboutScreen = () => {
  const { animationStage } = useContext(AnimationContext);
  const { colorMode } = useContext(ColorModeContext);

  return animationStage > 2 ? (
    <section
      className={`${styles.screenContainer} ${
        colorMode === "light" ? "lightMode" : "darkMode"
      }`}
    >
      <h1 className={styles.jumbo}>About</h1>
      <FileNav />
      <Toggler />
    </section>
  ) : null;
};
