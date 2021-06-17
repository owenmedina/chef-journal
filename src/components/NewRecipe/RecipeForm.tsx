import React, { FC } from "react";
import styles from "../../sass/components/NewRecipe/RecipeForm.module.scss";

const RecipeForm: FC = () => {
  return (
    <form className={styles["recipe-form"]}>
      <label htmlFor="title">Recipe Title</label>
      <input
        id="title"
        className={styles["input-md"]}
        placeholder={"Recipe Title"}
      ></input>
      {/* <IngredientsInput />
      <StepsInput /> */}
    </form>
  );
};

export default RecipeForm;
