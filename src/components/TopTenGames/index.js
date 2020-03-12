import React, { Component } from "react";
import { Button, ButtonGroup, Grid, IconButton, Paper, Link } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import ReactPlayer from "react-player";

import "./style.css";

class TopTenGames extends Component {
  constructor(props) {
    super(props);
    this.state = { currentGame: 10, isDevice: false };
    this.updateDevice = this.updateDevice.bind(this);
  };

  componentDidMount() {
    this.updateDevice();
    window.addEventListener("resize", this.updateDevice);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDevice);
  };

  selectPrev = () => {
    let counter = this.state.currentGame;
    counter++;
    if (counter < 11) {
      this.setState(() => ({ currentGame: counter }));
    } else {
      this.setState({ currentGame: 1 });
    };
  };

  selectNumber = id => {
    this.setState({ currentGame: id });
  };

  selectNext = () => {
    let counter = this.state.currentGame;
    counter--;
    if (counter > 0) {
      this.setState(() => ({ currentGame: counter }));
    } else {
      this.setState({ currentGame: 10 });
    };
  };

  updateDevice() {
    this.setState({ isDevice: window.innerWidth < 880 });
  };

  render() {
    const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const gameId = this.state.currentGame;
    const conVar = this.props.getData;
    const isDevice = this.state.isDevice;

    return (
      <Grid container justify="center" alignItems="center">
        <Grid item container alignItems="center" component={Paper} spacing={1}>
          <Grid item xs={1}>
            <IconButton onClick={() => this.selectPrev()} className="backArrow iconBtn" aria-label="last game">
              <ArrowBackIos className="backArrow" fontSize="large" />
            </IconButton>
          </Grid>
          <Grid className="btnGroup" item xs={10}>
            <ButtonGroup variant="text" aria-label="text primary button group">
              {numbers.map(btnRender => (
                <Button onClick={() => this.selectNumber(btnRender)} key={btnRender}>{btnRender}</Button>
              ))}
            </ButtonGroup>
          </Grid>
          <Grid className="iconBtn" item xs={1}>
            <IconButton onClick={() => this.selectNext()} aria-label="next game">
              <ArrowForwardIos fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        { !isDevice ? (
          <Grid item container justify="center" alignItems="center" spacing={3} className="gameBody">
            <Grid item xs={12}>
              <h1 className="gameTitle title">{conVar[gameId]["name"]}</h1>
            </Grid>
            <Grid item container justify="center" alignItems="center" xs={6} component={Paper}>
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
            <Grid item container justify="center" alignItems="center" xs={8} component={Paper}>
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
          </Grid>
        }
      </Grid>
    );
  };
};

export default TopTenGames;