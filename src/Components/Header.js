import React from "react";
import logo from "../assets/Logo.svg";
import "./Header.css";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <MainNav />
    </header>
  );
};

export default Header;
