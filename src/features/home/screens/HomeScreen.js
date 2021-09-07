import React, { useContext } from "react";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import { AnimationContext } from "../../../services/animation/animation.context";
import styles from "./styles.module.css";
import { Navbar } from "../components/navbar/Navbar";
import { Text } from "../components/text/Text";
import { AnimatedHero } from "../components/animated-hero/AnimatedHero";

const links = [
  {
    text: "Home",
    url: "#",
  },
  {
    text: "About",
    url: "#about",
  },
  {
    text: "Projects",
    url: "#projects",
  },
  {
    text: "Connect",
    url: "#connect",
  },
];

// animated home screen
export const HomeScreen = () => {
  const { colorMode } = useContext(ColorModeContext);
  const { animationStage } = useContext(AnimationContext);

  return (
    <>
      <Navbar links={links} hide={animationStage < 3 ? true : false} />
      <section
        className={`${styles.screenContainer} ${
          colorMode === "light" ? "lightMode" : "darkMode"
        }`}
      >
        <Text />
        <AnimatedHero />
      </section>
    </>
  );
};
