import React, { Component } from "react";
import { Button, ButtonGroup, Grid, IconButton, Paper, Link } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ReactPlayer from "react-player";

import "./style.css";

class TopTenGames extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      currentGame: 10, isDevice: false, isHandheld: false, isClicked: "primary", notClicked: "default" 
    };
    this.updateDevice = this.updateDevice.bind(this);
  };

  componentDidMount() {
    this.updateDevice();
    this.numberChosen();
    window.addEventListener("resize", this.updateDevice);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice);
  };

  selectPrev = () => {
    let counter = this.state.currentGame;
    counter++;
    if (counter < 11) {
      this.setState(() => ({ 
        currentGame: counter }), () => {this.numberChosen()}
      );
    } else {
      this.setState({ 
        currentGame: 1 }, () => {this.numberChosen()}
      );
    };
  };

  selectNumber = id => {
    this.setState({ 
      currentGame: id }, () => {this.numberChosen()}
    );
  };

  selectNext = () => {
    let counter = this.state.currentGame;
    counter--;
    if (counter > 0) {
      this.setState(() => ({ 
        currentGame: counter }), () => {this.numberChosen()}
      );
    } else {
      this.setState({ 
        currentGame: 10 }, () => {this.numberChosen()}
      );
    };
  };

  numberChosen = () => {
    const current = this.state.currentGame;

    switch (current) {
      case 10:
        document.getElementById("10").style.background = "skyblue" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 9:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "skyblue"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 8:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "skyblue"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 7:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "skyblue"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 6:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "skyblue"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 5:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "skyblue"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 4:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "skyblue"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 3:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "skyblue"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "none"
        return;
      case 2:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "skyblue"
        document.getElementById("1").style.background = "none"
        return;
      case 1:
        document.getElementById("10").style.background = "none" 
        document.getElementById("9").style.background = "none"
        document.getElementById("8").style.background = "none"
        document.getElementById("7").style.background = "none"
        document.getElementById("6").style.background = "none"
        document.getElementById("5").style.background = "none"
        document.getElementById("4").style.background = "none"
        document.getElementById("3").style.background = "none"
        document.getElementById("2").style.background = "none"
        document.getElementById("1").style.background = "skyblue"
        return;
      default:
        break;
    };
  };

  updateDevice = () => {
    this.setState({ 
      isDevice: window.innerWidth < 880, isHandheld: window.innerWidth < 650 
    });
  };

  render() {
    const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const gameId = this.state.currentGame;
    const conVar = this.props.getData;
    const isDevice = this.state.isDevice;
    const isHandheld = this.state.isHandheld;

    return (
      <Grid container justify="center" alignItems="center">
        { !isHandheld ? (
        <Grid item container justify="center" alignItems="center" component={Paper} spacing={1}>
          <Grid item container justify="center" xs={2}>
            <Grid item>
            <IconButton onClick={() => this.selectPrev()} aria-label="last game">
              <ArrowBackIos fontSize="large" />
            </IconButton>
            </Grid> 
          </Grid>
          <Grid className="btnGroup" item xs={8}>
            <ButtonGroup variant="text" aria-label="text primary button group">
              {numbers.map(btnRender => (
                <Button id={btnRender} onClick={() => this.selectNumber(btnRender)} key={btnRender}>{btnRender}</Button>
              ))}
            </ButtonGroup>
          </Grid>
          <Grid item container justify="center" xs={2}>
            <Grid item>
              <IconButton onClick={() => this.selectNext()} aria-label="next game">
                <ArrowForwardIos fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        ):
        <Grid item container justify="center" alignItems="center" component={Paper} spacing={1}>
          <Grid className="btnGroup" item xs={12}>
            <ButtonGroup variant="text" aria-label="text primary button group">
              {numbers.map(btnRender => (
                <Button id={btnRender} onClick={() => this.selectNumber(btnRender)} key={btnRender}>{btnRender}</Button>
              ))}
            </ButtonGroup>
          </Grid>
        </Grid>
        }
        { !isDevice ? (
        <Grid item container justify="center" alignItems="center" spacing={3} className="gameBody">
          <Grid item xs={12}>
            <h1 className="gameTitle title">{conVar[gameId]["name"]}</h1>
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={6}>
            <Grid item>
              <ReactPlayer className="vidPlayer" url={conVar[gameId + 20]} controls width="100%" height="100%" />
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <h4>Released</h4>
            <p>{conVar[gameId]["released"]}</p>
            <h4>Genre</h4>
            <p>{conVar[gameId + 10]["name"]}</p>
            <Link href={conVar[gameId]["background_image"]} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              <h4>Game Background Image</h4>
            </Link>
          </Grid>
          <Grid item container alignItems="center" justify="center" xs={3} component={Paper}>
            <Grid item xs={12}>
              <h2 className="title rateTitle">RATING</h2>
            </Grid>
            <Grid item xs={8}>
              <h3 className="rating">{conVar[gameId]["rating"]}</h3>
            </Grid>
          </Grid>
        </Grid>
        ):
        <Grid item container justify="center" alignItems="center" spacing={3} className="gameBody">
          <Grid item xs={12}>
            <h1 className="gameTitle title">{conVar[gameId]["name"]}</h1>
          </Grid>
          <Grid item container justify="center" alignItems="center" xs={8}>
            <Grid item>
              <ReactPlayer className="vidPlayer" url={conVar[gameId + 20]} controls width="100%" height="100%" />
            </Grid>
          </Grid>
          <Grid item container alignItems="center" justify="center" xs={4} component={Paper}>
            <Grid item xs={12}>
              <h2 className="title rateTitle">RATING</h2>
            </Grid>
            <Grid item xs={8}>
              <h3 className="rating">{conVar[gameId]["rating"]}</h3>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Link href={conVar[gameId]["background_image"]} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              <h4 className="title">Game Background Image</h4>
            </Link>
          </Grid>
        </Grid>
        }
      </Grid>
    );
  };
};

export default TopTenGames;