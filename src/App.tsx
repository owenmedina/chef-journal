import React from "react";
import styles from "./sass/components/App.module.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className={styles["App"]}>
      <Navbar />
    </div>
  );
}

export default App;
