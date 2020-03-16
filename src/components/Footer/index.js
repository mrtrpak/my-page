import React from "react";
import { Grid } from "@material-ui/core";

import ScrollTopBtn from "../ScrollTopBtn";

import "./style.css";

export default function Footer() {
  
  return (
    <Grid container justify="center" alignItems="center" className="footer">
      <ScrollTopBtn />
    </Grid>
  );
};