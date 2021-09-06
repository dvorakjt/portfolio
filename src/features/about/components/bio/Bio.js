import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Text } from "../text/Text";
import { Bauble } from "../bauble/Bauble";
import musicIcon from "../../../../assets/images/music-icon.png";
import codeIcon from "../../../../assets/images/code-icon.png";
import styles from "./Bio.module.css";

export const Bio = () => {
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
              source={codeIcon}
              style={{
                position: "absolute",
                bottom: "0px",
                left: "-5vw",
                animationDelay: "0.75s",
                minWidth: "300px",
                minHeight: "300px",
              }}
              size="35vw"
            />
            <Bauble
              source={musicIcon}
              style={{
                position: "absolute",
                top: "0vh",
                right: "5vw",
                animationDelay: "1s",
                minWidth: "250px",
                minHeight: "250px",
              }}
              size="25vw"
            />
            <div className={styles.innerWrapper}>
              <Text textArray={["Bio"]} />
              <p className={styles.fadeIn}>
                I'm a full stack web developer who also enjoys developing mobile
                apps with React Native. I grew up near Philadelphia, PA, and
                I've been coding since high school, when I used to stay up way
                too late programming old-school games in BASIC. After channeling
                this long-held interest and enrolling in the Full Stack Coding
                Bootcamp at UPenn, I am proud to say that I can now stay up way
                too late building websites.
              </p>
              <p className={styles.fadeIn}>
                <b>Fun Fact:</b> Besides being an avid programmer, I'm also a
                classically-trained clarinetist!
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </VisibilitySensor>
  );
};
