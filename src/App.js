import React from "react";
import { HashRouter, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import GamesPage from "./pages/GamesPage";
import BundesligaPage from "./pages/BundesligaPage";

export default function App() {
  return (
    <HashRouter basename="/">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/gamer" component={GamesPage} />
      <Route exact path="/soccer" component={BundesligaPage} />
    </HashRouter>
  );
};