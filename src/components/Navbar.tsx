import React, { FC } from "react";
import styles from "../sass/components/Navbar.module.scss";

const Navbar: FC = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar__logo"]}>Chef's</div>
      <ul className={styles["navbar__links"]}>
        <li>Recipes</li>
        <li>Create</li>
      </ul>
    </nav>
  );
};

export default Navbar;
