import React, { useEffect, useState } from "react";
import { Grid, Link, IconButton, Paper } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";
import GithubIcon from "@material-ui/icons/GitHub";

import gameGif from "../../gifs/game.gif";
import budgetTrackerGif from "../../gifs/budgetTracker.gif";
import businessGif from "../../gifs/businessCard.gif";
import switchGifs from "../../gifs/switchGifs.gif";

const AppContext = React.createContext();

export default function PlayerAndLinks() {

  const [projTitle, updTitle] = useState("Portfolio");
  const [source, updSrc] = useState(switchGifs);

  // constructor() {
  //   super();
  //   this.state = {
  //     isHandheld: false,
  //     projTitle: "Portfolio",
  //     source: switchGifs
  //   };
  // };

  const handleClick = id => {
    switch (id) {
      case "1":
        document.getElementById("projectText").innerHTML = "A free to use business card creator where a user can create cards from a selection of templates and print out multiple cards on a page.";
        document.getElementById("toolsText").innerHTML = "axios, ES6, CSS3, express, heroku, MySQL, passport, nodemon, react, sequelize";
        return this.setState({ source: businessGif, projTitle: "Business Card App" });
      case "2":
        document.getElementById("projectText").innerHTML = "A retro style game where a user can create a character to fight a tough boss. There are four move types Normal, Special, Heal & Dodge.";
        document.getElementById("toolsText").innerHTML = "ES6, express, handlebars, , MySQL, nes.css, nodemon, sequelize";
        return this.setState({ source: gameGif, projTitle: "Full Stack Game" });
      case "3":
        document.getElementById("projectText").innerHTML = "App that tracks spending and income to get a clear view of money expenditure. It also works offline if there is no internet connection.";
        document.getElementById("toolsText").innerHTML = "CSS3, express, JS, mongoDB, mongoose, PWA"
        return this.setState({ source: budgetTrackerGif, projTitle: "Budget Tracker App" });
      default:
        return this.setState({ source: switchGifs });
    };
  };

  return (
    <AppContext.Consumer>
      <Grid container alignItems="center" justify="space-evenly" spacing={3}>
        {this.context}
        <Grid item xs={5} component={Paper}>
          <img src={this.state.source} alt="loading..." className="player" />
        </Grid>
        <Grid container item xs={5} alignItems="center" justify="center" component={Paper}>
          <Grid item xs={2} lg={1}>
            <IconButton onClick={() => { handleClick("1") }} aria-label="card-gif" color="inherit">
              <TheatersIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8} lg={10}>
            <Link style={{ textDecoration: "none" }} color="primary" href="https://stormy-harbor-93453.herokuapp.com/">
  <h3 className="linkText">Business Card Creator</h3>
            </Link>
          </Grid> 
          <Grid item xs={2} lg={1}>
            <IconButton aria-label="card-github" color="inherit">
              <a href="https://github.com/mrtrpak/Futurum-est-nostrum">
                <GithubIcon />
              </a>
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={1}>
            <IconButton onClick={() => { handleClick("2") }} aria-label="game-gif" color="inherit">
              <TheatersIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8} lg={10}>
            <Link style={{ textDecoration: "none" }} color="primary" href="https://immense-hamlet-97451.herokuapp.com/">
              <h3 className="linkText">Full-stack Retro Game</h3>
            </Link>
          </Grid> 
          <Grid item xs={2} lg={1}>
            <IconButton aria-label="game-github" color="inherit">
              <a href="https://github.com/mrtrpak/ProjectTwoTheGame">
                <GithubIcon />
              </a>
            </IconButton>
          </Grid>
          <Grid item xs={2} lg={1}>
            <IconButton onClick={() => { handleClick("3") }} aria-label="budget-gif" color="inherit">
              <TheatersIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8} lg={10}>
            <Link style={{ textDecoration: "none" }} color="primary" href="https://still-ravine-53114.herokuapp.com/">
              <h3 className="linkText">Budget Tracker</h3>
            </Link>
          </Grid> 
          <Grid item xs={2} lg={1}>
            <IconButton aria-label="budget-github" color="inherit">
              <a href="https://github.com/mrtrpak/Budget-Tracker">
                <GithubIcon />
              </a>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={3}>
        <Grid item sm={6}>
          <img src={this.state.source} alt="loading..." className="player" />
        </Grid>
      </Grid>
    </AppContext.Consumer>
  );
};