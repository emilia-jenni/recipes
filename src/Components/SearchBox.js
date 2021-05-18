import React from "react";
import Form from "react-bootstrap/Form";

const SearchBox = ({ search }) => {
  return (
    <Form.Group>
      <Form.Control
        type="text"
        onChange={search}
        placeholder="Search for recipes"
      />
    </Form.Group>
  );
};

export default SearchBox;
