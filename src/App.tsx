import React from "react";
import styles from "./sass/components/App.module.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Layout/Main";

function App() {
  return (
    <div className={styles["App"]}>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
