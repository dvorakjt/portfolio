import React, { useContext, useRef, useEffect, useState } from "react";
import { AnimationContext } from "../../../services/animation/animation.context";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import { ProjectsNavbar } from "../components/projects-navbar/ProjectsNavbar";
import { ProjectViewport } from "../components/project-viewport/ProjectViewport";
import { ProjectInfoCard } from "../components/project-info-card/ProjectInfoCard";
import { MARKDOWN } from "../../../assets/markdown";
import styles from "./ProjectsScreen.module.css";
import portScreen from "../../../assets/images/portfolio-screenshot.png";
import ntunScreen from "../../../assets/images/ntunation-screenshot.png";
import mealsScreen from "../../../assets/images/meals-to-go-screenshot.png";
import focusScreen from "../../../assets/images/focustime-screenshot.png";

// Array of projects to display
const projects = [
  {
    image: portScreen,
    name: "Portfolio",
    link: "https://dvorakjt.github.io/",
    github: "https://github.com/dvorakjt/portfolio.com",
    shortDesc: "My React-powered portfolio",
    readMe: MARKDOWN[0],
  },
  {
    image: ntunScreen,
    name: "Ntunation",
    link: "http://ntunation.com",
    github: "https://github.com/dvorakjt/ntunation",
    shortDesc: "An ear-training app focused on small pitch discrepenancies",
    readMe: MARKDOWN[1],
  },
  {
    image: mealsScreen,
    name: "Meals to Go",
    github: "https://github.com/dvorakjt/MealsToGo",
    shortDesc: "A React Native restaurant app built through the ZTM course",
    readMe: MARKDOWN[2],
  },
  {
    image: focusScreen,
    name: "FocusTime",
    link: "https://snack.expo.dev/@dvorakjt/focustime",
    github: "https://github.com/dvorakjt/FocusTime",
    shortDesc:
      "A React Native productivity app bootstrapped with Expo, built through the ZTM course",
    readMe: MARKDOWN[3],
  },
];

export const ProjectsScreen = () => {
  const { animationStage } = useContext(AnimationContext);
  const { colorMode } = useContext(ColorModeContext);
  const jumboWrapper = useRef(null);

  /*the angle to rotate the jumbo text by. this is calculated using the inverse tangent of 15% of the
  window height divided by the window width (or the height and width of the jumbo wrapper, if it exists in the dom*/
  const [angle, setAngle] = useState(
    `${Math.atan((window.innerHeight * 0.15) / window.innerWidth)}rad`
  );
  const [currentProject, setCurrentProject] = useState(0);

  //attach an event listener to the window so that when the screen is resized, the angle of the jumbo text changes
  useEffect(() => {
    const updateAngle = () => {
      if (jumboWrapper.current) {
        const a = jumboWrapper.current.offsetHeight;
        const b = jumboWrapper.current.offsetWidth;
        const alpha = Math.atan(a / b);
        setAngle(`${alpha}rad`);
      }
    };
    window.addEventListener("resize", updateAngle);
  }, [setAngle]);

  //if the opening animation hasn't finished, display nothing
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
      <ProjectsNavbar projects={projects} setParentState={setCurrentProject} />
      <ProjectViewport source={projects[currentProject].image} />
      <ProjectInfoCard project={projects[currentProject]} />
    </section>
  ) : null;
};
