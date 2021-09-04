import React from "react";
import { Text } from "../Text";
import styles from "./Skillset.module.css";
import { Bauble } from "../bauble/Bauble";
import reactIcon from "../../../../assets/images/react-icon.png";
import htmlIcon from "../../../../assets/images/html-icon.png";
import cssIcon from "../../../../assets/images/css-icon.png";
import jsIcon from "../../../../assets/images/js-icon.png";
import nodeIcon from "../../../../assets/images/node-icon.png";

export const Skillset = () => {
  return (
    <div className={styles.outerWrapper}>
      <Bauble
        source={htmlIcon}
        style={{
          position: "absolute",
          top: "5vh",
          left: "-5vw",
          animationDelay: "2.25s",
        }}
        size="20vw"
      />
      <Bauble
        source={reactIcon}
        style={{
          position: "absolute",
          bottom: "0vh",
          left: "15vw",
          animationDelay: "2.5s",
        }}
        size="20vw"
      />
      <Bauble
        source={nodeIcon}
        style={{
          position: "absolute",
          top: "-10vh",
          left: "35vw",
          animationDelay: "2.75s",
        }}
        size="20vw"
      />
      <Bauble
        source={cssIcon}
        style={{
          position: "absolute",
          top: "25vh",
          right: "25vw",
          animationDelay: "3s",
        }}
        size="20vw"
      />
      <Bauble
        source={jsIcon}
        style={{
          position: "absolute",
          bottom: "0vh",
          right: "0vw",
          animationDelay: "3.25s",
        }}
        size="20vw"
      />
      <div className={styles.innerWrapper}>
        <Text textArray={["Skillset"]} />
        <h3 className={styles.fadeIn}>
          Some things I'm passionate about are...
        </h3>
        <ul className={styles.fadeInDelay}>
          <li>HTML, JavaScript and CSS</li>
          <li>Responsive, cross-browser-compatible front end design</li>
          <li>React and React Native</li>
          <li>
            Backend development with Express.js, MySql, MongoDB and Firebase
          </li>
        </ul>
      </div>
    </div>
  );
};
