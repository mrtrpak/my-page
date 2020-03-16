import React, { Component } from "react";
import { Breadcrumbs, Grid } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";

import "./style.css";

const linksFunc = e => {
  if (e.target.id === "github") {
    return window.location = "https://github.com/mrtrpak";
  } else if (e.target.id === "linkedin") {
    return window.location = "https://www.linkedin.com/in/michael-trpak/"
  } else {
    return;
  };
};

class NavBar extends Component {
  
  constructor() {
    super();
    this.state = { 
      isPhone: false
    };
    this.updateFormat = this.updateFormat.bind(this);
  };

  componentDidMount() {
    this.updateFormat();
    window.addEventListener("resize", this.updateFormat);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateFormat);
  };
  
  updateFormat() {
    this.setState({
      isPhone: window.innerWidth < 400
    });
  };

  render() {
    const isPhone = this.state.isPhone;

    return (
      <div>
        { !isPhone ? (
        <Grid container justify="space-between" alignItems="center" className="navbar">
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h1 className="name">Michael Trpak</h1>
          </Grid>
          <Grid item container justify="flex-end" xs={4}>
            <Breadcrumbs aria-label="breadcrumb" id="navLinks">
              <GitHub id="github" onClick={linksFunc} />
              <LinkedIn id="linkedin" onClick={linksFunc} />
            </Breadcrumbs>
          </Grid>
        </Grid>
        ):
        <Grid container justify="space-between" alignItems="center" className="navbar">
          <Grid item xs={6}>
            <h1 className="name">Michael Trpak</h1>
          </Grid>
          <Grid item container justify="flex-end" xs={6}>
            <Breadcrumbs aria-label="breadcrumb" id="navLinks">
              <GitHub id="github" onClick={linksFunc} />
              <LinkedIn id="linkedin" onClick={linksFunc} />
            </Breadcrumbs>
          </Grid>
        </Grid>
        }
      </div>
    );
  };
};

export default NavBar;