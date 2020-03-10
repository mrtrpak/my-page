import React from "react";
import { Grid } from "@material-ui/core";

import SoccerApiComp from "../../components/SoccerApiComp";
import BundesligaKey from "../../components/BundesligaKey";
import PortfolioBtn from "../../components/PortfolioBtn";

export default function BundesligaPage() {
    return (
      <Grid container spacing={3} direction="row" alignItems="center" justify="center">
        <Grid item xs={11}>
          <SoccerApiComp />
        </Grid>
        <Grid item xs={10}>
          <BundesligaKey />
        </Grid>
        <PortfolioBtn />
      </Grid>
    );
  };