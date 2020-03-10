import React from "react";
import { Grid, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function PortfolioBtn() {
  return (
    <Grid container justify="center" spacing={3} style={{ padding: "30px" }}>
      <Grid item align="center" xs={3}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Back to Portfolio
          </Button>
        </NavLink>
      </Grid>
    </Grid>
  );
};