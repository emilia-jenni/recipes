import React, { useEffect, useState } from "react";
import axios from "axios";

import RecipeForm from "../Components/RecipeForm";
import SearchBox from "../Components/SearchBox";
import RecipesList from "../Components/RecipesList";

const Recipes = () => {
  const [setRecipe] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes/")
      .then((res) => setRecipe(res.data));
  });

  return (
    <section id="recipes">
      <SearchBox />
      <RecipeForm />
      <RecipesList />
    </section>
  );
};

export default Recipes;
