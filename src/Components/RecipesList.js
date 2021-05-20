import React from "react";
import RecipeCard from "./RecipeCard";

const RecipesList = ({ recipes }) => {
  return (
    <div className="recipecard">
      {recipes.map((r) => (
        <RecipeCard
          key={r.id}
          name={r.name}
          img={r.image}
          totalTime={r.totalTime}
          link={r.name}
          id={r.id}
          keywords={r.keywords}
        />
      ))}
    </div>
  );
};

export default RecipesList;
