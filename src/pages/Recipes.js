import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBox from "../Components/SearchBox";
import RecipesList from "../Components/RecipesList";

const Recipes = () => {
  const [recipes, setRecipe] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/recipes/")
      .then((res) => setRecipe(res.data));
  }, []);

  const recipeFilter = recipes.filter((recipes) => {
    return recipes.name
      .toLocaleLowerCase()
      .includes(searchInput.toLocaleLowerCase());
  });

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  if (!recipes) {
    return <p>Loading...</p>;
  }

  if (recipes) {
    return (
      <section id="recipes">
        <SearchBox search={searchValueHandler} />
        <RecipesList recipes={recipeFilter} />
      </section>
    );
  }
};

export default Recipes;
