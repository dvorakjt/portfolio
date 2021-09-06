import React, { useContext, useState } from "react";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import { AnimationContext } from "../../../services/animation/animation.context";
import { Skillset } from "../components/skillset/Skillset";
import { Bio } from "../components/bio/Bio";
import { ScreenToggler } from "../components/screen-toggler/ScreenToggler";
import styles from "./About.module.css";

export const AboutScreen = () => {
  // get the animationStage from the animation context so that the page only renders after the intro animation is done
  const { animationStage } = useContext(AnimationContext);

  // get the color mode context to switch between light mode and dark mode
  const { colorMode } = useContext(ColorModeContext);

  // pageToShow can either be set to bio or skillset
  const [pageToShow, setPageToShow] = useState("bio");

  return animationStage > 2 ? (
    <section
      id="about"
      className={`${styles.screenContainer} ${
        colorMode === "light" ? "lightMode" : "darkMode"
      }`}
    >
      <div className={styles.jumboWrapperInvis}>
        <h1 className={styles.jumboText}>About</h1>
      </div>
      <div
        className={`${styles.jumboWrapper} ${
          colorMode === "light" ? styles.jumboWrapperLM : styles.jumboWrapperDM
        }`}
      >
        <h1 className={styles.jumboText}>About</h1>
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
