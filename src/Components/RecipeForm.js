import React from "react";

const RecipeForm = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="img">Image URL:</label>
        <input type="url" id="img" name="img" required />
        <label htmlFor="total">Total Time:</label>
        <input type="text" id="total" name="total" />
        <label htmlFor="desc">Description:</label>
        <input type="text" id="desc" name="desc" />
        <label htmlFor="keywords">Keywords:</label>
        <input type="text" id="keywords" name="keywords" />
        <label htmlFor="ingredients">Ingredient 1:</label>
        <input type="text" id="ingredient" name="ingredient" />
        <label htmlFor="ingredients">Ingredient 2:</label>
        <input type="text" id="ingredient" name="ingredient" />
        <label htmlFor="ingredients">Ingredient 3:</label>
        <input type="text" id="ingredient" name="ingredient" />
        <label htmlFor="ingredients">Ingredient 4:</label>
        <input type="text" id="ingredient" name="ingredient" />
        <label htmlFor="ingredients">Ingredient 5:</label>
        <input type="text" id="ingredient" name="ingredient" />
        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" required />
      </form>
    </div>
  );
};

export default RecipeForm;
