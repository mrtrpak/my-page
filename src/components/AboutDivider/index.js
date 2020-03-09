import React from "react";
import { Grid, Paper } from "@material-ui/core";

import DividerMenu from "../DividerMenu";

export default function AboutDivider() {
  return (
    <Grid container justify="center" alignItems="center">
      <Paper>
        <DividerMenu />
      </Paper>
    </Grid>
  );
};