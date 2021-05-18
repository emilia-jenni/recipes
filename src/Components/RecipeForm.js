import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RecipeForm = ({ submit, change }) => {
  return (
    <Form onSubmit={submit}>
      <Form.Group>
        <Form.Label htmlFor="name">Recipe Name:</Form.Label>
        <Form.Control type="text" name="name" onChange={change} required />
      </Form.Group>
      <Form.Label htmlFor="img">Image URL:</Form.Label>
      <Form.Control type="url" name="img" onChange={change} required />
      <Form.Group>
        <Form.Label htmlFor="total">Total Time:</Form.Label>
        <Form.Control type="text" name="total" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="desc">Description:</Form.Label>
        <Form.Control type="text" name="desc" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="keywords">Keywords:</Form.Label>
        <Form.Control type="text" name="keywords" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 1:</Form.Label>
        <Form.Control type="text" name="ingredient" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 2:</Form.Label>
        <Form.Control type="text" name="ingredient" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 3:</Form.Label>
        <Form.Control type="text" name="ingredient" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 4:</Form.Label>
        <Form.Control type="text" name="ingredient" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="ingredients">Ingredient 5:</Form.Label>
        <Form.Control type="text" name="ingredient" onChange={change} />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="instructions">Instructions:</Form.Label>
        <Form.Control
          type="text"
          name="instructions"
          onChange={change}
          required
        />
      </Form.Group>
      <Button type="submit" value="Submit" variant="outline-success">
        Submit
      </Button>
    </Form>
  );
};

export default RecipeForm;
