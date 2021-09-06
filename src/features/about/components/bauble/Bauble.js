import React from "react";
import styles from "./Bauble.module.css";

export const Bauble = ({ source, size = "50px", style }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${source})`,
        height: size,
        width: size,
        ...style,
      }}
      className={styles.bauble}
    ></div>
  );
};
