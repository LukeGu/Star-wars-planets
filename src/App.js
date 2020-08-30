import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import PlanetsPage from "./pages/Planets";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/planets" component={PlanetsPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
