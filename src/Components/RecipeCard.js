import React from "react";
import Card from "react-bootstrap/Card";
import "../App.css";

const RecipeCard = ({ name, img, totalTime, keywords }) => {
  return (
    <div className="recipecard">
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{totalTime}</Card.Text>
          <Card.Text>{keywords}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecipeCard;
