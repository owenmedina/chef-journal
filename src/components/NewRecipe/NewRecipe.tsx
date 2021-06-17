import React, { FC } from "react";
import styles from "../../sass/components/NewRecipe/NewRecipe.module.scss";
import RecipeForm from "./RecipeForm";

const NewRecipe: FC = () => {
  return (
    <div className={styles["new-recipe"]}>
      <h2 className={styles["new-recipe__heading"]}>Create a New Recipe</h2>
      <div className={styles["new-recipe__body"]}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/chef.jpg`}
          alt={"Recipe Sample Image"}
        ></img>
        <RecipeForm />
      </div>
    </div>
  );
};

export default NewRecipe;
