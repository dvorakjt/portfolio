import React from "react";
import { Text } from "../Text";
import { Bauble } from "../bauble/Bauble";
import musicIcon from "../../../../assets/images/music-icon.png";
import codeIcon from "../../../../assets/images/code-icon.png";
import styles from "./Bio.module.css";

export const Bio = () => {
  return (
    <div className={styles.outerWrapper}>
      <Bauble
        source={codeIcon}
        style={{
          position: "absolute",
          bottom: "-7vw",
          left: "-5vw",
          animationDelay: "0.75s",
        }}
        size="35vw"
      />
      <Bauble
        source={musicIcon}
        style={{
          position: "absolute",
          top: "0vh",
          right: "10vw",
          animationDelay: "1s",
        }}
        size="25vw"
      />
      <div className={styles.innerWrapper}>
        <Text textArray={["Bio"]} />
        <p className={styles.fadeIn}>
          I'm a full stack web developer who also enjoys developing mobile apps
          with React Native. I grew up near Philadelphia, PA, and I've been
          coding since high school, when I used to program old-school games
          using BASIC. In 2019, I channeled this long-held interest and enrolled
          in the Full Stack Coding Bootcamp at UPenn, and discovered a new
          passion.
        </p>
        <p className={styles.fadeIn}>
          <b>Fun Fact:</b> Besides being an avid programmer, I'm also a
          classically-trained clarinetist!
        </p>
      </div>
    </div>
  );
};
