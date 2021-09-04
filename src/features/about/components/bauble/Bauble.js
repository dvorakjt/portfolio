import React from "react";
import styles from "./Bauble.module.css";

export const Bauble = ({ source, size = "50px", style }) => {
  return (
    <div
      style={{
        ...style,
        backgroundImage: `url(${source})`,
        height: size,
        width: size,
      }}
      className={styles.bauble}
    ></div>
  );
};
