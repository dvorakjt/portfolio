import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Text } from "../text/Text";
import styles from "./Skillset.module.css";
import { Bauble } from "../bauble/Bauble";
import reactIcon from "../../../../assets/images/react-icon.png";
import htmlIcon from "../../../../assets/images/html-icon.png";
import cssIcon from "../../../../assets/images/css-icon.png";
import jsIcon from "../../../../assets/images/js-icon.png";
import nodeIcon from "../../../../assets/images/node-icon.png";

export const Skillset = () => {
  /* if the element has not entered view, don't render the animated elements. Set Partial visibility
  to true for small screens */
  const [hasEnteredView, setHasEnteredView] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility={true}
      onChange={(isVisible) => {
        if (!hasEnteredView) {
          setHasEnteredView(isVisible);
        }
      }}
    >
      <div className={styles.outerWrapper}>
        {hasEnteredView ? (
          <>
            <Bauble
              source={htmlIcon}
              style={{
                position: "absolute",
                top: "5vh",
                left: "-5vw",
                animationDelay: "2.25s",
              }}
              size="17vw"
            />
            <Bauble
              source={cssIcon}
              style={{
                position: "absolute",
                bottom: "0vw",
                left: "10vw",
                animationDelay: "2.5s",
              }}
              size="23vw"
            />
            <Bauble
              source={jsIcon}
              style={{
                position: "absolute",
                top: "-10vw",
                left: "35vw",
                animationDelay: "2.75s",
              }}
              size="30vw"
            />
            <Bauble
              source={reactIcon}
              style={{
                position: "absolute",
                bottom: "-5vw",
                right: "20vw",
                animationDelay: "3s",
              }}
              size="20vw"
            />
            <Bauble
              source={nodeIcon}
              style={{
                position: "absolute",
                top: "20vh",
                right: "0vw",
                animationDelay: "3.25s",
              }}
              size="20vw"
            />
            <div className={styles.innerWrapper}>
              <Text textArray={["Skillset"]} />
              <h3 className={styles.fadeIn}>
                These are a few of my favorite things...
              </h3>
              <ul className={styles.fadeInDelay}>
                <li>
                  <span className={styles.underlinedText}>
                    HTML, JavaScript and CSS
                  </span>
                </li>
                <li>
                  <span className={styles.underlinedText}>
                    Responsive, cross-browser-compatible frontend design
                  </span>
                </li>
                <li>
                  <span className={styles.underlinedText}>
                    React and React Native
                  </span>
                </li>
                <li>
                  <span className={styles.underlinedText}>
                    Backend development with Node.js, MySql, and MongoDb
                  </span>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </VisibilitySensor>
  );
};
