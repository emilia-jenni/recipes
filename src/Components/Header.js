import React from "react";
import logo from "../assets/Logo.svg";
import MainNav from "./MainNav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" fixed="top">
        <LinkContainer to="/">
          <img className="logo" src={logo} alt="logo" />
        </LinkContainer>
        <MainNav />
      </Navbar>
    </header>
  );
};

export default Header;
