import React from "react";

const RecipeForm = () => {
  return (
    <div className="form">
      <form>
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="img">Image URL:</label>
        <input type="url" id="img" name="img" required />
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="name">Recipe Name:</label>
        <input type="text" id="name" name="name" required />
      </form>
    </div>
  );
};

export default RecipeForm;
