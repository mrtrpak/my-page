import React from "react";
import { Grid, Paper } from "@material-ui/core";

import LinksMenu from "../LinksMenu";

import "./style.css";

export default function AboutDivider() {
  return (
    <Grid className="divider" container justify="center" alignItems="center">
      <Paper>
        <LinksMenu />
      </Paper>
    </Grid>
  );
};