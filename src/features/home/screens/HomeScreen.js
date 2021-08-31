import React, { useContext } from "react";
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
    url: "#",
  },
  {
    text: "Portfolio",
    url: "#",
  },
  {
    text: "Connect",
    url: "#",
  },
];

// animated home screen
export const HomeScreen = () => {
  const { animationStage } = useContext(AnimationContext);
  console.log(animationStage);

  return (
    <>
      <Navbar links={links} hide={animationStage < 3 ? true : false} />
      <section className={styles.screenContainer}>
        <Text />
        <AnimatedHero />
      </section>
    </>
  );
};
