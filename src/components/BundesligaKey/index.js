import React from "react";
import { Grid, Paper } from "@material-ui/core";

import "./style.css";

export default function BundesligaKey() {
  return (
    <Paper elevation={3}>
      <Grid container alignItems="center" justify="space-around" spacing={3}>
        <Grid container item alignItems="center" justify="center" xs={12}>
          <Grid item>
            <h3 className="keyTitle">TABLE KEY</h3>
          </Grid>
        </Grid>
        <Grid container item alignItems="center" justify="center" spacing={1} xs={10} style={{ marginLeft: "3px" }}>
          <Grid item xs={8}>
            - A Bundesliga champion or
            <a href="https://en.wikipedia.org/wiki/List_of_German_football_champions" target="_blank" rel="noopener noreferrer" className="champLink links"> Deutscher Meister </a> 
            is decided by points after 34 matches. 
            3 pts for win, 1 pt for tie, 0 for loss. 
            Each team plays one another both home and away.
          </Grid>
          <Grid item xs={4}>
            - Teams that finish in the top 4 qualify for the 
            <a href="https://www.uefa.com/uefachampionsleague/" target="_blank" rel="noopener noreferrer" className="clLink links"> UEFA Champions League</a>. 
            The most prestigious european club competition.
          </Grid>
          <Grid item xs={8}>
            - Finishing in 16th place sees a 
            <a href="https://www.bundesliga.com/en/bundesliga/news/how-does-bundesliga-promotion-and-relegation-work-play-off-4061" target="_blank" rel="noopener noreferrer" className="relPlLink links"> 2-leg playoff </a> 
            against the 3rd place finisher in 2. Bundesliga.
            Teams that finish 
            <a href="https://www.bundesliga.com/de/2bundesliga/tabelle" target="_blank" rel="noopener noreferrer" className="relLink links"> 17th and 18th </a> 
            are relegated to 2. Bundesliga, being replaced by the top 2 teams in that league.
          </Grid>
          <Grid item xs={4}>
            - Teams that finish in 5th and 6th place qualify for the
            <a href="https://www.uefa.com/uefaeuropaleague/" target="_blank" rel="noopener noreferrer" className="elLinks links"> UEFA Europa League</a>.
            It's similar to the Champions League, but a step lower.
          </Grid>
        </Grid>
        <Grid container item justify="center" spacing={1} xs={2}>
          <Grid item xs={12}>
            <span className="info">MP: </span>matches played
          </Grid>
          <Grid item xs={12}>
            <span className="info">TP: </span>total points
          </Grid>
          <Grid item xs={12}>
            <span className="info">GF: </span>goals for
          </Grid>
          <Grid item xs={12}>
            <span className="info">GA: </span>goals against
          </Grid>
          <Grid item xs={12}>
            <span className="info">GD: </span>goal differential
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};