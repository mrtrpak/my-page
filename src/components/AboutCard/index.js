import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import { Grid, Button } from "@material-ui/core";

import logo from "../../photos/logo.png";

import "./style.css";

class AboutCard extends Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
      isDesktop: false
    };
    this.updateIsDesktop = this.updateIsDesktop.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    this.updateIsDesktop();
    window.addEventListener("resize", this.updateIsDesktop);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsDesktop);
  };

  updateIsDesktop() {
    this.setState({ isDesktop: window.innerWidth > 601 });
  };

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipSpeedFrontToBack={0.5} flipSpeedBackToFront={0.5} flipDirection="vertical">
        <div className="box">
          <Grid container justify="flex-end">
            <Grid container alignItems="center" item sm={6} className="aboutMe">
              { isDesktop ? (
              <Grid item xs={4} className="picGrid">
                <img src={logo} alt="X" className="logoImg" />
              </Grid>
              ): 
              (<div></div>)}
              <Grid item xs={8} className="aboutText">
                <Grid container justify="center">
                  Full stack web developer certified through the UNCC coding bootcamp with a degree in communication studies. Developed skills in HTML5, CSS3, Javascript, ES6, MySql and React. A problem solver that works well in a group and helps with conflict resolution and creativity to achieve a goal in a given time frame. With each project I push the boundaries of my capabilities to give the best possible experience for the user. 
                </Grid>
              </Grid>
                <Grid item xs={12} className="flipBtn frontBtn">
                  <Button color="primary" style={{ backgroundColor: "transparent" }} onClick={this.handleClick}>
                    <span className="btnText">Click To Flip</span>
                  </Button>
                </Grid> 
            </Grid>
          </Grid>
        </div>

        <div className="box">
          <Grid container justify="flex-end">
            <Grid container item justify="center" xs={6} className="aboutMe backCard">
              <Grid item xs={10} className="aboutText">
                <h3 className="backTitle">Soccer API</h3>
                <p className="backText">
                  Click on the Bundesliga logo to view the current Bundesliga standings. The top soccer league in Germany that 18 teams compete in.
                </p>
                <h3 className="backTitle">Video Game API</h3>
                <p className="backText">
                  Click the Mario on Throne image to view the top 10 rated video games from the last 5 years based on the RAWG API rating system.
                </p>
                <Button color="primary" style={{ backgroundColor: "transparent" }} onClick={this.handleClick}>
                  <span className="btnText">Click To Flip</span>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </ReactCardFlip>
    );
  };
};

export default AboutCard;