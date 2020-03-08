import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";

import BlockQuote from "../BlockQuote";
import blImg from "../../photos/bundesliga.png";
import gameImg from "../../photos/games.jpg";

import "./style.css";

class AboutTrio extends Component {
  constructor() {
    super();
    this.state = {
      isHandheld: false
    };
    this.updateHandheld = this.updateHandheld.bind(this);
  };

  componentDidMount() {
    this.updateHandheld();
    window.addEventListener("resize", this.updateHandheld);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateHandheld);
  };

  updateHandheld() {
    this.setState({ isHandheld: window.innerWidth > 601 });
  };

  render() {
    const isHandheld = this.state.isHandheld;
    
    return (
      <div>
        { !isHandheld ? (
          <Grid container spacing={3} direction="row" alignItems="center" justify="center" id="hobbiesContainer">
            <Grid item xs={8} align="center">
              <BlockQuote align="center" />
            </Grid>
            <Grid item xs={6}>
              <NavLink to ="/GamerLife">
                <img id="games" src={gameImg} alt="Video Games" className="image" align="right" />
              </NavLink>
            </Grid>
            <Grid item xs={6}>
              <NavLink to="/MiaSanMia">
                <img id="soccer" src={blImg} alt="Bayern Munich" className="image" />
              </NavLink>
            </Grid>
          </Grid>
        ):
        <Grid container spacing={3} align="column" alignItems="center" id="hobbiesContainer">
          <Grid item sm={4}>
            <NavLink to="/gamer">
              <img id="games" src={gameImg} alt="Video Games" className="image" align="right" />
            </NavLink>
          </Grid>
          <Grid item sm={4}>
            <BlockQuote />
          </Grid>
          <Grid item sm={4}>
            <NavLink to="/soccer">
              <img id="soccer" src={blImg} alt="Bayern Munich" className="image" />
            </NavLink>
          </Grid>
        </Grid>
        }
      </div>
    );
  };
};

export default AboutTrio;