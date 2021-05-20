import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import AddRecipes from "../pages/AddRecipes";
import About from "../pages/About";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/recipes" component={Recipes}></Route>
        <Route path="/addrecipes" component={AddRecipes}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </main>
  );
};

export default Main;
