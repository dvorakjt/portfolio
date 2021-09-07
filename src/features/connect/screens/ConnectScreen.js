import React, { useContext } from "react";
import { AnimationContext } from "../../../services/animation/animation.context";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import styles from "./ConnectScreen.module.css";
import gmailIcon from "../../../assets/images/gmail-icon.png";
import githubIcon from "../../../assets/images/github-icon.png";
import linkedInIcon from "../../../assets/images/linkedin-icon.png";
import codewarsIcon from "../../../assets/images/codewars-icon.png";

export const ConnectScreen = () => {
  const { animationStage } = useContext(AnimationContext);
  const { colorMode } = useContext(ColorModeContext);

  return animationStage > 2 ? (
    <footer
      className={`${styles.screenContainer} ${
        colorMode === "light" ? "lightMode" : "darkMode"
      }`}
      id="connect"
    >
      <div className={styles.innerContainer}>
        <h1>Let's Connect</h1>
        <div className={styles.iconsContainer}>
          <a href="mailto:dvorakjt@gmail.com">
            <img src={gmailIcon} alt="email me" className={styles.icon} />
          </a>
          <a href="https://github.com/dvorakjt">
            <img
              src={githubIcon}
              alt="visit my github page"
              className={styles.icon}
            />
          </a>
          <a href="https://www.linkedin.com/in/joseph-dvorak-musician-educator-developer/">
            <img
              src={linkedInIcon}
              alt="visit my linkedIn page"
              className={styles.icon}
            />
          </a>
          <a href="https://www.codewars.com/users/dvorakjt">
            <img
              src={codewarsIcon}
              alt="visit my codewars page"
              className={styles.icon}
            />
          </a>
        </div>
        <h6>Icon Attributions</h6>
        <div>
          <ul>
            <li>
              HTML, CSS, LinkedIn icons by{" "}
              <a href="https://www.iconfinder.com/zlaten">Pixel Bazaar</a> under
              CC.
            </li>
            <li>
              Github, Javascript, Node.js icon by{" "}
              <a href="https://www.iconfinder.com/Flatart">Flatart</a> under CC.
            </li>
            <li>
              Codewars icon by{" "}
              <a href="https://www.iconfinder.com/iconfinder">Iconfinder</a>{" "}
              under CC.
            </li>
            <li>
              Code icon by{" "}
              <a href="https://www.iconfinder.com/justui">Just UI</a>.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  ) : null;
};
