import React, { useState, useEffect, useContext } from "react";
import { AnimationContext } from "../../../../services/animation/animation.context";
import { typeMe } from "./typeme";
import styles from "./styles.module.css";

// array containing text to type
const textArray = [
  "Hello, World!",
  "I'm Joe, a developer.",
  "Welcome to my portfolio!",
];

//functional component to export
export const Text = () => {
  const { animationStage, setAnimationStage } = useContext(AnimationContext);

  const [isMounted, setIsMounted] = useState(false);
  const [textState, setTextState] = useState([
    {
      currentLine: true,
      text: "",
    },
    {
      currentLine: false,
      text: "",
    },
    {
      currentLine: false,
      text: "",
    },
  ]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      typeMe(textArray, 0, 0, textState, setTextState, setAnimationStage);
    }
  }, [setAnimationStage, textState, isMounted]);

  return (
    <div className={styles.textWrapper}>
      <h1
        className={`${styles.heading} ${
          textState[0].currentLine ? styles.blinkingCursor : ""
        }`}
      >
        {textState[0].text}
      </h1>
      <h2
        className={`${styles.subHeading} ${
          textState[1].currentLine ? styles.blinkingCursor : ""
        }`}
      >
        {textState[1].text}
      </h2>
      <h2
        className={`${styles.subHeading} ${
          textState[2].currentLine ? styles.blinkingCursor : ""
        }`}
      >
        {textState[2].text}
      </h2>
    </div>
  );
};
