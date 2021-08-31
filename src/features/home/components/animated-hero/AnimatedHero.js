import React, { useContext, useEffect, useRef, useState } from "react";
import { AnimationContext } from "../../../../services/animation/animation.context";
import planetEarth from "../../../../assets/images/planet-earth.png";
import reactIcon from "../../../../assets/images/react-icon.png";
import htmlIcon from "../../../../assets/images/html-icon.png";
import cssIcon from "../../../../assets/images/css-icon.png";
import jsIcon from "../../../../assets/images/js-icon.png";
import nodeIcon from "../../../../assets/images/node-icon.png";

import styles from "./styles.module.css";

const icons = [reactIcon, htmlIcon, cssIcon, jsIcon, nodeIcon];

export const AnimatedHero = () => {
  const { animationStage } = useContext(AnimationContext);
  const [timerStarted, setTimerStarted] = useState(false);
  const rotation = useRef(0);
  const icon = useRef(0);
  const [currentRotation, setCurrentRotation] = useState(rotation.current);

  useEffect(() => {
    if (!timerStarted && animationStage > 2) {
      //delay the start of the rotation timer
      setTimeout(() => {
        //set a flag to indicate timer has started
        setTimerStarted(true);
        setInterval(() => {
          //update the image every 1st and 3rd rotation
          //update the rotation every iteration
          rotation.current++;
          if (rotation.current > 3) rotation.current = 0;
          setCurrentRotation(rotation.current);
        }, 2000);
      }, 2000);
    }
  }, [animationStage]);

  useEffect(() => {
    if (timerStarted) {
      if (currentRotation === 0 || currentRotation === 2) {
        icon.current++;
        if (icon.current >= icons.length) {
          icon.current = 0;
        }
      }
    }
  }, [currentRotation, timerStarted]);

  const determineClass = (rotStarted, rot) => {
    if (!rotStarted) {
      return `${styles.reactIcon} ${styles.fadeInDelay}`;
    } else {
      let partialClass;
      switch (rot) {
        case 0:
          partialClass = styles.rot90;
          break;
        case 1:
          partialClass = styles.rot360;
          break;
        case 2:
          partialClass = styles.rot90;
          break;
        case 3:
          partialClass = styles.rot360;
          break;
        default:
          partialClass = styles.reactIcon;
      }
      const cssClass = `${styles.spinningIcon} ${partialClass}`;
      return cssClass;
    }
  };

  return (
    <div className={`${styles.imagesContainer} ${styles.shrink}`}>
      <div className={styles.imageWrapper}>
        <img
          alt="Planet Earth"
          src={planetEarth}
          className={`${styles.worldImage} ${styles.fadeInThenOut}`}
        />
      </div>
      <div className={styles.imageWrapper}>
        <img
          alt="React JS Icon"
          src={icons[icon.current]}
          className={determineClass(timerStarted, currentRotation)}
        />
      </div>
    </div>
  );
};
