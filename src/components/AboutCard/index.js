import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Button, Grid, Paper } from "@material-ui/core";

import logo from "../../photos/logo.png";

import "./style.css";

export default function AboutCard() {
  const [cardSize, setSize] = useState(6);
  const [gridDir, setGridDir] = useState("flex-end");
  const [isFlipped, setFlip] = useState(false);
  const [smallScreen, setScreen] = useState(false);

  useEffect(() => {
    let width = window.innerWidth;

    const logoFunc = () => {
      (width < 680) ? setScreen(true) : setScreen(false)
    };
  
    const updState = () => {
      if (width > 980) {
        setGridDir("flex-end");
        setSize(8);
      } else if (width < 600) {
        setGridDir("center");
        setSize(11);
      } else {
        setGridDir("center");
        setSize(10);
      };
    };
    
    const useEffectFunc = () => {
      logoFunc();
      updState();
    }
    
    window.addEventListener("resize", useEffectFunc);
    return () => window.removeEventListener("resize", useEffectFunc);
  }, [])

  const handleClick = e => {
    e.preventDefault();

    (isFlipped === false) ? setFlip(true) : setFlip(false);
  };

  return (
    <ReactCardFlip 
      isFlipped={isFlipped} 
      flipSpeedBackToFront={0.5} 
      flipSpeedFrontToBack={0.5} 
      flipDirection="vertical"
    >
      
      {/* front of card */}
      <Grid container justify={gridDir}>
        <Grid container item alignItems="center" justify="center" xs={cardSize} className="cardBox" component={Paper}>
          { !smallScreen ? (
            <Grid item xs={2} sm={3} className="logoGrid">
              <img src={logo} alt="X" className="img" />
            </Grid>
          ) : 
          <div></div>
        }
          <Grid item xs={11} sm={9} className="frontText">
            Full stack web developer certified through the UNCC coding bootcamp with a degree in communication studies. Developed skills in HTML5, CSS3, Javascript, ES6, MySql and React. A problem solver that works well in a group and helps with conflict resolution and creativity to achieve a goal in a given time frame. With each project I push the boundaries of my capabilities to give the best possible experience for the user. 
          </Grid>
          <Grid item xs={6} className="flipBtn">
            <Button variant="contained" onClick={handleClick}>
              FLIP CARD
            </Button>
          </Grid>
        </Grid>
      </Grid>
      
      {/* back of card */}
      <Grid container justify={gridDir}>
        <Grid container item alignItems="center" justify="center" xs={cardSize} className="cardBox" component={Paper}>
          <Grid item xs={12} sm={6} className="backText">
            <h3 className="backTitle">Video Game Api</h3>
            Click the left circular button below to view the top 10 rated video games from the last 5 years based on averaged critic scores. *** Thank you to RAWG API.
          </Grid>
          <Grid item xs={12} sm={6} className="backText">
            <h3 className="backTitle">Soccer Api</h3>
            Click the right circular button below to vew the latest Bundesliga standings, the top soccer league in Germany. *** Thank you to football-data.org API.
          </Grid>
          <Grid item xs={6} className="flipBtn">
            <Button variant="contained" onClick={handleClick}>
              FLIP CARD
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </ReactCardFlip>
  );
};