import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "../src/pages/Homepage";


export default function App() {
  return (
    <div>
      Hello there
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route></Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  )
}