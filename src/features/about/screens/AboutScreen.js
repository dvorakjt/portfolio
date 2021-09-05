import React, { useContext, useState } from "react";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import { AnimationContext } from "../../../services/animation/animation.context";
import { Skillset } from "../components/skillset/Skillset";
import { Bio } from "../components/bio/Bio";
import { ScreenToggler } from "../components/ScreenToggler";
import styles from "./About.module.css";

export const AboutScreen = () => {
  const { animationStage } = useContext(AnimationContext);
  const { colorMode } = useContext(ColorModeContext);
  const [pageToShow, setPageToShow] = useState("skillset");

  return animationStage > 2 ? (
    <section
      id="about"
      className={`${styles.screenContainer} ${
        colorMode === "light" ? "lightMode" : "darkMode"
      }`}
    >
      <div className={styles.jumboWrapperInvis}>
        <h1 className={styles.jumbo}>About</h1>
      </div>
      <div
        className={`${styles.jumboWrapper} ${
          colorMode === "light" ? styles.jumboWrapperLM : styles.jumboWrapperDM
        }`}
      >
        <h1 className={styles.jumbo}>About</h1>
      </div>
      <div>{pageToShow === "skillset" ? <Skillset /> : <Bio />}</div>
      <div
        className={`${styles.lowerAccent} ${
          colorMode === "light" ? styles.jumboWrapperLM : styles.jumboWrapperDM
        }`}
      ></div>
      <ScreenToggler setParentState={setPageToShow} />
    </section>
  ) : null;
};
