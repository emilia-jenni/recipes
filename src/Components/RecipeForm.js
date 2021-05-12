import React from "react";

const RecipeForm = ({ submit, change }) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Recipe Name:</label>
          <input type="text" id="name" name="name" onChange={change} required />
        </div>
        <label htmlFor="img">Image URL:</label>
        <input type="url" id="img" name="img" onChange={change} required />
        <div>
          <label htmlFor="total">Total Time:</label>
          <input type="text" id="total" name="total" onChange={change} />
        </div>
        <div>
          <label htmlFor="desc">Description:</label>
          <input type="text" id="desc" name="desc" onChange={change} />
        </div>
        <div>
          <label htmlFor="keywords">Keywords:</label>
          <input type="text" id="keywords" name="keywords" onChange={change} />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredient 1:</label>
          <input
            type="text"
            id="ingredient"
            name="ingredient"
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredient 2:</label>
          <input
            type="text"
            id="ingredient"
            name="ingredient"
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredient 3:</label>
          <input
            type="text"
            id="ingredient"
            name="ingredient"
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredient 4:</label>
          <input
            type="text"
            id="ingredient"
            name="ingredient"
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredient 5:</label>
          <input
            type="text"
            id="ingredient"
            name="ingredient"
            onChange={change}
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            onChange={change}
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RecipeForm;
