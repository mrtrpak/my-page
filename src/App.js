import React from "react";
import { HashRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={HomePage} />
    </HashRouter>
  );
};