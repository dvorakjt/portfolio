import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";
import { ColorModeContext } from "../../../services/colormode/colormode.context";
import styles from "./Folder.module.css";

export const Folder = ({ name, files, isOpen }) => {
  const { colorMode } = useContext(ColorModeContext);
  const [fileSelected, setFileSelected] = useState();

  return (
    <div className={styles.folder}>
      <FontAwesomeIcon icon={isOpen ? faFolderOpen : faFolder} size="2x" />
      {" " + name}
      {isOpen && files ? (
        <ul>
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className={
                fileSelected === index
                  ? `selected${colorMode === "light" ? "LM" : "DM"}`
                  : ""
              }
            >
              <button
                onClick={() => {
                  file.func();
                  setFileSelected(index);
                }}
              >
                <FontAwesomeIcon icon={faFileCode} size="2x" />
                {" " + file.name}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
