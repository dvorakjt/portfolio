import React, { useContext, useRef, useEffect, useState } from "react";
import { AnimationContext } from "../../../services/animation/animation.context";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import { ProjectsNavbar } from "../components/projects-navbar/ProjectsNavbar";
import styles from "./ProjectsScreen.module.css";
import portScreen from "../../../assets/images/portfolio-screenshot.png";

const projects = [
  {
    image: portScreen,
    name: "some project",
  },
  {
    image: portScreen,
    name: "some project",
  },
  {
    image: portScreen,
    name: "some project",
  },
  {
    image: portScreen,
    name: "some project",
  },
  {
    image: portScreen,
    name: "some project",
  },
];

export const ProjectsScreen = () => {
  const { animationStage } = useContext(AnimationContext);
  const { colorMode } = useContext(ColorModeContext);
  const jumboWrapper = useRef(null);
  const [angle, setAngle] = useState(
    `${Math.atan((window.innerHeight * 0.15) / window.innerWidth)}rad`
  );

  useEffect(() => {
    const updateAngle = () => {
      const a = jumboWrapper.current.offsetHeight;
      const b = jumboWrapper.current.offsetWidth;
      const alpha = Math.atan(a / b);
      setAngle(`${alpha}rad`);
    };
    window.addEventListener("resize", updateAngle);
  }, [setAngle]);

  return animationStage > 2 ? (
    <section
      id="projects"
      className={`${styles.screenContainer} ${
        colorMode === "light" ? "lightMode" : "darkMode"
      }`}
    >
      <div
        className={`${styles.jumboSpacer} ${
          colorMode === "light" ? styles.jumboSpacerLM : styles.jumboSpacerDM
        }`}
      ></div>
      <div className={styles.jumboWrapperInvis}>
        <h1
          className={styles.jumboText}
          style={{ transform: `rotate(${angle})` }}
        >
          Projects
        </h1>
      </div>
      <div
        className={`${styles.jumboWrapper} ${
          colorMode === "light" ? styles.jumboWrapperLM : styles.jumboWrapperDM
        }`}
        ref={jumboWrapper}
      >
        <h1
          className={styles.jumboText}
          style={{ transform: `rotate(${angle})` }}
        >
          Projects
        </h1>
      </div>
      <ProjectsNavbar projects={projects} />
    </section>
  ) : null;
};
