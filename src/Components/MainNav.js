import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "";

const MainNav = () => {
  return (
    <Nav bg="light" expand="lg">
      <ul>
        <li>
          <Nav.Link to="/">Home</Nav.Link>
        </li>
        <li>
          <Nav.Link to="/recipes">Recipes</Nav.Link>
        </li>
        <li>
          <Nav.Link to="/about">About</Nav.Link>
        </li>
      </ul>
    </Nav>
  );
};

export default MainNav;
