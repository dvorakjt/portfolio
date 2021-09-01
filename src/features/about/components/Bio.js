import React from "react";
import { Text } from "./Text";
import styles from "./Bio.module.css";

export const Bio = () => {
  return (
    <div className={styles.wrapper}>
      <Text textArray={["Bio"]} />
      <p className={styles.fadeIn}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        convallis erat ex, at rhoncus mi mollis vel. Mauris tempor elit in risus
        venenatis ornare. Fusce nec est eu enim fringilla varius. Nulla sed
        risus sit amet leo viverra iaculis vitae nec justo. In velit felis,
        blandit sed bibendum ac, congue at lectus. Maecenas dui nisi, auctor sed
        maximus nec, luctus non nisl. Nulla sit amet erat mattis ligula
        tincidunt mattis eget a velit. Fusce nec suscipit tellus. Sed molestie
        ullamcorper ante, ut sollicitudin elit. Ut volutpat bibendum tellus non
        porta. Suspendisse pellentesque vestibulum aliquet. Donec quis neque ut
        diam vulputate porta quis sed sapien. Ut tortor lorem, tristique et
        tristique eu, hendrerit at neque. Nulla sagittis neque eget elementum
        elementum. Aliquam aliquam blandit varius. Integer lobortis eros vel
        tortor iaculis porttitor. Vestibulum ullamcorper malesuada quam quis
        vestibulum. Etiam maximus tellus odio, cursus luctus lorem facilisis a.
        Nunc hendrerit pretium est, non placerat est malesuada in. In hac
        habitasse platea dictumst. Praesent sit amet euismod urna.
      </p>
    </div>
  );
};
