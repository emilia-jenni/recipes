import React from "react";

import RecipeForm from "../Components/RecipeForm";
import SearchBox from "../Components/SearchBox";
import RecipesList from "../Components/RecipesList";

//import React, { useEffect } from "react";

const Recipes = () => {
  /* useEffect(() => {
    axios
      .get("http://localhost:3001/recipes/" + id)
      .then((res) => setRecipe(res.data));
  });*/

  return (
    <section id="recipes">
      <SearchBox />
      <RecipeForm />
      <RecipesList />
    </section>
  );
};

export default Recipes;
