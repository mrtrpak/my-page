import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "../src/pages/HomePage";


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route></Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  );
};