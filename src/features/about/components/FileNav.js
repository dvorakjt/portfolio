import React, { useContext } from "react";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import { Folder } from "./Folder";
import styles from "./FileNav.module.css";

export const FileNav = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  return (
    <div
      className={`${styles.fileNav} ${
        colorMode === "light"
          ? `lightMode ${styles.boxShadowLM}`
          : `darkMode ${styles.boxShadowDM}`
      }`}
    >
      <h2>Portfolio</h2>
      <ul>
        <li>
          <Folder name="Home" defaultToOpen={false} />
        </li>
        <li>
          <Folder
            name="About"
            files={[
              {
                name: "skillset-light-mode",
                func: () => setColorMode("light"),
              },
              { name: "bio-dark-mode", func: () => setColorMode("dark") },
            ]}
            isOpen={true}
          />
        </li>
        <li>
          <Folder name="Portfolio" defaultToOpen={false} />
        </li>
        <li>
          <Folder name="Connect" defaultToOpen={false} />
        </li>
      </ul>
    </div>
  );
};
