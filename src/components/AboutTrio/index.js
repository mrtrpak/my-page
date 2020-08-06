import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@material-ui/core";

import BlockQuote from "../BlockQuote";

import soccerImg from "../../photos/bundesliga.jpg";
import gameImg from "../../photos/games.jpg";

import "./style.css";

export default function AboutTrio() {
  const [isHandheld, setHandheld] = useState(false);

  const settingState = () => {
    const width = window.innerWidth;

    (width < 960) ? setHandheld(true) : setHandheld(false); 
  }
  
  useEffect(() => {
    function onLoadFunc() {
      settingState();
    }
    window.addEventListener("resize", onLoadFunc);
    return () => window.removeEventListener("resize", onLoadFunc);
  }, []);

  return (
    <div>
      { isHandheld ? (
        <Grid container alignItems="center" direction="column" justify="center" className="hobbiesContainer">
          <Grid item xs={8}>
            <BlockQuote />
          </Grid>
          <Grid container item alignItems="center" direction="row" justify="space-evenly">
            <Grid item xs={6} className="btnGridItem">
              <NavLink to="/gamer">
                <img id="games" src={gameImg} alt="Video Games" className="btnImg" />
              </NavLink>
            </Grid>
            <Grid item xs={6} className="btnGridItem">
              <NavLink to="/soccer">
                <img id="soccer" src={soccerImg} alt="Bundesliga Logo" className="btnImg" />
              </NavLink>
            </Grid> 
          </Grid>
        </Grid>
      ) : 
        <Grid container alignItems="center" justify="center" className="hobbiesContainer">
          <Grid item xs={4} className="btnGridItem">
            <NavLink to="/gamer">
              <img id="games" src={gameImg} alt="Video Games" className="btnImg" />
            </NavLink>
          </Grid>
          <Grid item xs={4}>
            <BlockQuote />
          </Grid>
          <Grid item xs={4} className="btnGridItem">
            <NavLink to="/soccer">
              <img id="soccer" src={soccerImg} alt="Bundesliga Logo" className="btnImg" />
            </NavLink>
          </Grid>
        </Grid>
      }
    </div>
  );
};