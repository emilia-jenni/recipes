import React from "react";
import RecipeCard from "./RecipeCard";
//import axios from "axios";
/*
    axios.get("http://localhost:3001/recipes/").then((res) => res.data);*/

const RecipesList = ({ recipes }) => {
  return (
    <>
      {recipes.map((r) => (
        <RecipeCard
          key={r.id}
          name={r.name}
          img={r.image}
          desc={r.description}
          link={r.name}
          id={r.id}
        />
      ))}
    </>
  );
};

export default RecipesList;
