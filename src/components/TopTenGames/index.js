import React, { Component } from "react";
import { Button, ButtonGroup, Grid, IconButton, Paper, Link, CardMedia } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

import "./style.css";

class TopTenGames extends Component {
  constructor(props) {
    super(props);
    this.state = { currentGame: 10 };
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

  render () {
    const numbers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const gameId = this.state.currentGame;
    const conVar = this.props.getData;

    return (
      <Grid container justify="center" alignItems="center">
        <Grid item container justify="space-around" alignItems="center" component={ Paper } spacing={1}>
          <Grid className="test" item xs={1}>
            <IconButton onClick={() => this.selectPrev()} className="backArrow iconBtn" aria-label="last game">
              <ArrowBackIosIcon className="backArrow" fontSize="large" />
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
              <ArrowForwardIosIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container justify="center" alignItems="center" xs={12} spacing={3} className="gameBody">
          <Grid item xs={8}>
            <h1 className="gameTitle title">{conVar[gameId]["name"]}</h1>
          </Grid>
          <Grid item xs={8}>
            <div className="imgDiv">
              <CardMedia className="gameImg" src={conVar[gameId+20]} alt="X" />
              {conVar[gameId+20]}
            </div>
          </Grid>
          <Grid item xs={2} m={3}>
            <h4>Released</h4>
            <p>{conVar[gameId]["released"]}</p>
            <h4>Genre</h4>
            <p>{conVar[gameId +10]["name"]}</p>
            <Link href={conVar[gameId]["background_image"]} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                <h4>Game Image</h4>
            </Link>
          </Grid>
          <Grid item container alignItems="center" justify="center" xs={2} component={ Paper }>
            <Grid item xs={12}>
              <h2 className="title rateTitle">RATING</h2>
            </Grid>
            <Grid item xs={8}>
              <h3 className="rating">{conVar[gameId]["rating"]}</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
};

export default TopTenGames;