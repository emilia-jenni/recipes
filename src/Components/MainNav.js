import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { IndexLinkContainer } from "react-router-bootstrap";

const MainNav = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <IndexLinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </IndexLinkContainer>
      <LinkContainer to="/recipes">
        <Nav.Link>Recipes</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/addrecipes">
        <Nav.Link>Add Recipes</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
        <Nav.Link>About</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default MainNav;
