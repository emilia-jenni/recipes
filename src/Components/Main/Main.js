import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Recipes from "../../pages/Recipes";
import About from "../../pages/About";
import "./Main.css";
import RecipeCard from "../Recipes/RecipeCard";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home}>
          <RecipeCard />
        </Route>
        <Route path="/recipes" component={Recipes}></Route>
        <Route path="/about" component={About}></Route>
      </Switch>
    </main>
  );
};

export default Main;
