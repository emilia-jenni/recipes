import React from "react";
import logo from "../assets/Logo.svg";
import MainNav from "./MainNav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <img className="logo" src={logo} alt="logo" />
        <MainNav />
      </Navbar>
    </header>
  );
};

export default Header;
