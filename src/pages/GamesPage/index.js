import React from "react";
import { Grid } from "@material-ui/core";

import GamerApi from "../../components/GamerApi";
import PortfolioBtn from "../../components/PortfolioBtn";

export default function GamesPage() {
  
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={11}>
        <GamerApi />
      </Grid>
      <Grid item xs={12}>
        <PortfolioBtn />
      </Grid>
    </Grid>
  );
};