import React, { useContext } from "react";
import { AnimationContext } from "../../../../services/animation/animation.context";
import planetEarth from "../../../../assets/images/planet-earth.png";
import reactIcon from "../../../../assets/images/react-icon.png";

import styles from "./styles.module.css";

export const AnimatedHero = () => {
  const { animationStage } = useContext(AnimationContext);

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
          src={reactIcon}
          className={`${
            animationStage < 2 ? styles.reactIcon : styles.spinningIcon
          } ${styles.fadeInDelay}`}
        />
      </div>
    </div>
  );
};
