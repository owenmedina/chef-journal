import React, { FC } from "react";
import styles from "../../sass/components/Layout/Main.module.scss";

interface Props {
  additionalClasses?: String;
}

const Main: FC<Props> = ({ children, additionalClasses }) => {
  return (
    <main className={`${styles["main"]} ${additionalClasses}`}>{children}</main>
  );
};

export default Main;
