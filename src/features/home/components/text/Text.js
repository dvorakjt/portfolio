import React, { useState, useEffect, useContext } from "react";
import { ColorModeContext } from "../../../../services/colormode/colormode.context";
import { AnimationContext } from "../../../../services/animation/animation.context";
import { typeMe } from "../../../../utils/typeme";
import styles from "./styles.module.css";

// array containing text to type
const textArray = [
  "Hello, World!",
  "I'm Joe, a developer.",
  "Welcome to my portfolio!",
];

//functional component to export
export const Text = () => {
  const { colorMode } = useContext(ColorModeContext);
  const { setAnimationStage } = useContext(AnimationContext);

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
          colorMode === "light" ? "lightModeText" : "darkModeText"
        } ${
          textState[0].currentLine
            ? styles[`blinkingCursor${colorMode === "light" ? "LM" : "DM"}`]
            : ""
        }`}
      >
        {textState[0].text}
      </h1>
      <h2
        className={`${styles.subHeading} ${
          colorMode === "light" ? "lightModeText" : "darkModeText"
        } ${
          textState[1].currentLine
            ? styles[`blinkingCursor${colorMode === "light" ? "LM" : "DM"}`]
            : ""
        }`}
      >
        {textState[1].text}
      </h2>
      <h2
        className={`${styles.subHeading} ${
          colorMode === "light" ? "lightModeText" : "darkModeText"
        } ${
          textState[2].currentLine
            ? styles[`blinkingCursor${colorMode === "light" ? "LM" : "DM"}`]
            : ""
        }`}
      >
        {textState[2].text}
      </h2>
    </div>
  );
};
