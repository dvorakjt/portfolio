import React from "react";
import { Text } from "./Text";
import styles from "./Skillset.module.css";

export const Skillset = () => {
  return (
    <div className={styles.wrapper}>
      <Text textArray={["Skillset"]} />
      <p className={styles.fadeIn}>
        Ut at pellentesque tellus. Curabitur a mattis diam. Proin tincidunt
        tellus vitae enim dictum varius. In interdum fermentum lorem, feugiat
        ornare sem luctus at. Aliquam mattis auctor purus, sed accumsan nisl
        rhoncus vitae. Maecenas accumsan suscipit eros, quis tristique justo
        vehicula et. Curabitur rutrum mauris vitae tellus sagittis, fringilla
        congue erat commodo. Praesent at consectetur massa. Nulla facilisi.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Duis id nunc faucibus lacus accumsan tristique.
        Suspendisse efficitur commodo risus, vel finibus risus pellentesque
        varius. Praesent sit amet sollicitudin urna, sit amet porttitor enim.
        Maecenas euismod felis euismod ornare placerat. Sed non interdum eros.
        In metus metus, tempor sit amet tempus a, eleifend ac nulla. Morbi ut
        erat at diam imperdiet accumsan eget a turpis. Nullam eu ex nec sem
        commodo convallis. Maecenas sit amet faucibus lorem. Vestibulum maximus
        non justo eu laoreet. Vivamus nec velit et quam pharetra maximus.
        Integer dapibus lobortis eros vitae luctus.
      </p>
    </div>
  );
};
