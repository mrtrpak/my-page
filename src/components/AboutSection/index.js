import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { Parallax } from "react-parallax";

import AboutCard from "../AboutCard";
import AboutTrio from "../AboutTrio";

import parallaxImg1 from "../../photos/germany.jpg";

import "./style.css";

export default function AboutSection() {
  const [gridSize, setSize] = useState(11);
  const [strength, setStr] = useState(800);
  
  useEffect(() => {
    let width = window.innerWidth;
    
    function updState() {
      (width > 960) ? setSize(11) : setSize(12);
      (width > 960) ? setStr(400) : setStr(500);
    }
    window.addEventListener("resize", updState);
    return () => window.removeEventListener("resize", updState);
  }, []);

  return (
    <Parallax bgImage={parallaxImg1} strength={strength} className="parallaxBG">
      <Grid container alignItems="center" className="cardGrid">
        <Grid item xs={gridSize}>
          <AboutCard />
        </Grid>
        <Grid item className="trioGrid">
          <AboutTrio />
        </Grid>
      </Grid>
    </Parallax>
  );
};