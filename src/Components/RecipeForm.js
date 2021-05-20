import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RecipeForm = ({ submit, change }) => {
  return (
    <Form onSubmit={submit} className="form">
      <Form.Group>
        <Form.Label htmlFor="name">Recipe Name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Recipe name"
          onChange={change}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="img">Image URL:</Form.Label>
        <Form.Control
          type="url"
          name="img"
          placeholder="Link to the picture"
          onChange={change}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="total">Total Time:</Form.Label>
        <Form.Control
          type="text"
          name="total"
          placeholder="Total Cooking time in minutes"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="desc">Description:</Form.Label>
        <Form.Control
          type="text"
          name="desc"
          placeholder="Short description"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="keywords">Keywords:</Form.Label>
        <Form.Control
          type="text"
          name="keywords"
          placeholder="With hashtag, separate with a comma"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 1:</Form.Label>
        <Form.Control
          type="text"
          name="ingredient"
          placeholder="First ingredient"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 2:</Form.Label>
        <Form.Control
          type="text"
          name="ingredient"
          placeholder="Second ingredient"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 3:</Form.Label>
        <Form.Control
          type="text"
          name="ingredient"
          placeholder="Third ingredient"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 4:</Form.Label>
        <Form.Control
          type="text"
          name="ingredient"
          placeholder="Fourth ingredient"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 5:</Form.Label>
        <Form.Control
          type="text"
          name="ingredient"
          placeholder="Fifth ingredient"
          onChange={change}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="instructions">Instructions:</Form.Label>
        <Form.Control
          type="text"
          name="instructions"
          placeholder="Instructions"
          onChange={change}
          required
        />
      </Form.Group>
      <Button className="submitbtn" type="submit" value="Submit" variant="outline-success">
        Submit
      </Button>
    </Form>
  );
};

export default RecipeForm;
