import React from "react";

const RecipeCard = ({ name, image, totalTime }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}Hello</h2>
      <em>{totalTime}</em>
    </div>
  );
};

export default RecipeCard;
