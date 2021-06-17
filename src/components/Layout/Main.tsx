import React, { FC } from "react";
import styles from "../../sass/components/Layout/Main.module.scss";

const Main: FC = ({ children }) => {
  return <main className={styles["main"]}>{children}</main>;
};

export default Main;
