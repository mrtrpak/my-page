import React, { Component } from "react";
import { Parallax } from "react-parallax";

import AboutCard from "../AboutCard";
import AboutTrio from "../AboutTrio";
import parallaxImg1 from "../../photos/germany.jpg";

class AboutSection extends Component {
  constructor() {
    super();
    this.state = {
      strength: 800,
      height: 800
    };
    this.updateParallax = this.updateParallax.bind(this);
  };

  componentDidMount() {
    this.updateParallax();
    window.addEventListener("resize", this.updateParallax);
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateParallax);
  };

  updateParallax() {
    if (window.innerWidth < 601) {
      this.setState({ 
        strength: 200,
        height: 700
      });
    } else if (window.innerWidth > 1200) {
      this.setState({ 
        strength: 1200,
        height: 900
      });
    } else {
      this.setState({
        strength: 800,
        height: 800 
      });
    };
  };

  render() {
    return (
      <div>
        <Parallax bgImage={parallaxImg1} strength={this.state.strength} style={{ height: this.state.height }}>
          <AboutCard />
          <AboutTrio />
        </Parallax>
      </div>
    );
  };
};

export default AboutSection;