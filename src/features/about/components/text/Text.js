import React, { useState, useEffect, useContext } from "react";
import { ColorModeContext } from "../../../../services/colormode/colormode.context";
import { typeMe } from "../../../../utils/typeme";
import styles from "./Text.module.css";

//to pass into typeMe without updating animation context
const mockSetContext = (value) => {
  return;
};

//functional component to export
export const Text = ({ textArray }) => {
  const { colorMode } = useContext(ColorModeContext);

  const [isMounted, setIsMounted] = useState(false);
  const [textState, setTextState] = useState([
    {
      currentLine: true,
      text: "",
    },
  ]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      typeMe(textArray, 0, 0, textState, setTextState, mockSetContext);
    }
  }, [textState, isMounted, textArray]);

  return (
    <h1
      className={`${styles.typedText} ${
        colorMode === "light" ? "lightModeText" : "darkModeText"
      } ${
        textState[0].currentLine
          ? styles[`blinkingCursor${colorMode === "light" ? "LM" : "DM"}`]
          : ""
      }`}
    >
      {textState[0].text}
    </h1>
  );
};
