import React from "react";
import styles from "./sass/components/App.module.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Layout/Main";
import NewRecipe from "./components/NewRecipe/NewRecipe";

function App() {
  return (
    <div className={styles["App"]}>
      <Navbar />
      <Main additionalClasses="mt-md">
        <NewRecipe />
      </Main>
    </div>
  );
}

export default App;
