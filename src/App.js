import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";


export default function App() {
  return (
    <div>
      Hello there
      <Router>
        <Switch>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </Router>
    </div>
  )
}