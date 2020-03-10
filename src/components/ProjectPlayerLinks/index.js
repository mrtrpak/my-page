import React, { Component } from "react";
import { Grid, Link, Button } from "@material-ui/core";
import TheatersIcon from "@material-ui/icons/Theaters";

import gameGif from "../../gifs/game.gif";
import businessGif from "../../gifs/businessCard.gif";
import passwordGif from "../../gifs/passwordGen.gif";
import switchGifs from "../../gifs/switchGifs.gif";

import "./style.css";

class ProjectPlayerLinks extends Component {
  constructor() {
    super();
    this.state = { 
      source: "",
      direction: "column"
    };
    this.updateDirection = this.updateDirection.bind(this);
  };

  componentDidMount() {
    this.updateDirection();
    window.addEventListener("resize", this.updateDirection);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDirection);
  };

  updateDirection() {
    if (window.innerWidth > 720) {
      this.setState({ direction: "row"});
    } else {
      this.setState({ direction: "column" });
    };
  };

  handleClick = id => {
    switch (id) {
      case "1":
        document.getElementById("projectText").innerHTML = "A free to use business card creator where a user can create cards from a selection of templates and print out multiple cards on a page."
        return this.setState({ source: businessGif });
      case "2":
        document.getElementById("projectText").innerHTML = "A retro style game where a user can create a character and choose a class to fight a tough enemy. There are four move types Normal, Special, Heal & Dodge."
        return this.setState({ source: gameGif });
      case "3":
        document.getElementById("projectText").innerHTML = "App that can generate a random password from a selection of choices for the user and copy it to the their clipboard."
        return this.setState({ source: passwordGif });
      default:
        return this.setState({ source: switchGifs });
    };
  };

  render() {
    return (
      <div>
        <Grid container direction={this.state.direction} alignItems="center" justify="center">
          <Grid container item xs={12} sm={6}>
            <Grid item xs={12}>
              <img src={this.state.source || switchGifs} alt="loading..." className="player" />
            </Grid>
            <Grid item xs={8} sm={12}>
              <span id="projectText" className="directions">Click Icon to view Gif</span>
            </Grid>
          </Grid>
          <Grid item xs={8} sm={6} className="linkSection">
            <Grid container alignItems="center" justify="center">
              <Grid item xs={1} sm={2} md={1}>
                <Button style={{ backgroundColor: "transparent" }} onClick={() => { 
                this.setState({ id: "1"});
                this.handleClick("1");
                }}>
                  <TheatersIcon className="icon" />
                </Button>
              </Grid>
              <Grid item xs={11} sm={10} md={11}>
                <Link id="bizCard" className="aLink" style={{ textDecoration: "none" }} color="primary" href="https://stormy-harbor-93453.herokuapp.com/"><span id="bizCard">Business Card Creator</span></Link>
              </Grid>
              <Grid item xs={1} sm={2} md={1}>
                <Button onClick={() => { this.handleClick("2") }}>
                  <TheatersIcon className="icon" />
                </Button>
              </Grid>
              <Grid item xs={11} sm={10} md={11}>
                <Link className="aLink" style={{ textDecoration: "none" }} color="primary" href="https://immense-hamlet-97451.herokuapp.com/">Full Stack Retro Game</Link>
              </Grid>
              <Grid item xs={1} sm={2} md={1}>
                <Button onClick={() => { this.handleClick("3") }}>
                  <TheatersIcon className="icon" />
                </Button>
              </Grid>
              <Grid item xs={11} sm={10} md={11}>
                <Link className="aLink" style={{ textDecoration: "none" }} color="primary" href="https://github.com/mrtrpak/password-generator-2">Random Password App</Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>  
      </div>
    );
  };
};

export default ProjectPlayerLinks;