import React, { useContext } from "react";
import { AnimationContext } from "../../../services/animation/animation.context";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import styles from "./ConnectScreen.module.css";
import gmailIcon from "../../../assets/images/gmail-icon.png";
import githubIcon from "../../../assets/images/github-icon.png";
import linkedInIcon from "../../../assets/images/linkedin-icon.png";
import codewarsIcon from "../../../assets/images/codewars-icon.png";
import htmlIcon from "../../../assets/images/html-icon.png";
import cssIcon from "../../../assets/images/css-icon.png";
import jsIcon from "../../../assets/images/js-icon.png";
import nodeIcon from "../../../assets/images/node-icon.png";
import codeIcon from "../../../assets/images/code-icon.png";

export const ConnectScreen = () => {
  const { animationStage } = useContext(AnimationContext);
  const { colorMode } = useContext(ColorModeContext);

  return animationStage > 2 ? (
    <>
      <section
        className={`${styles.screenContainer} ${
          colorMode === "light" ? "darkMode" : "lightMode"
        }`}
        id="connect"
      >
        <div className={styles.innerContainer}>
          <h1>Let's Connect</h1>
          <div className={styles.iconsContainer}>
            <a href="mailto:dvorakjt@gmail.com">
              <img src={gmailIcon} alt="email me" className={styles.icon} />
            </a>
            <a
              href="https://github.com/dvorakjt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="visit my github page"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-dvorak-musician-educator-developer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedInIcon}
                alt="visit my linkedIn page"
                className={styles.icon}
              />
            </a>
            <a
              href="https://www.codewars.com/users/dvorakjt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={codewarsIcon}
                alt="visit my codewars page"
                className={styles.icon}
              />
            </a>
          </div>
        </div>
      </section>
      <footer
        className={`${styles.footer} ${
          colorMode === "light" ? "lightMode" : "darkMode"
        }`}
      >
        <ul className={styles.attribList}>
          <li>
            <img src={htmlIcon} alt="HTML" className={styles.tinyIcon} />
            <img src={cssIcon} alt="CSS" className={styles.tinyIcon} />
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className={styles.tinyIcon}
            />{" "}
            icons by{" "}
            <a
              href="https://www.iconfinder.com/zlaten"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Bazaar
            </a>{" "}
            under CC.
          </li>
          <li>
            <img src={githubIcon} alt="Github" className={styles.tinyIcon} />
            <img src={jsIcon} alt="Javascript" className={styles.tinyIcon} />
            <img src={nodeIcon} alt="Node.js" className={styles.tinyIcon} />
            icons by{" "}
            <a
              href="https://www.iconfinder.com/Flatart"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flatart
            </a>{" "}
            under CC.
          </li>
          <li>
            <img
              src={codewarsIcon}
              alt="Codewars"
              className={styles.tinyIcon}
            />{" "}
            icon by{" "}
            <a
              href="https://www.iconfinder.com/iconfinder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iconfinder
            </a>{" "}
            under CC.
          </li>
          <li>
            <img src={codeIcon} alt="Code" className={styles.tinyIcon} /> icon
            by{" "}
            <a
              href="https://www.iconfinder.com/justui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Just UI
            </a>
            .
          </li>
        </ul>
      </footer>
    </>
  ) : null;
};
