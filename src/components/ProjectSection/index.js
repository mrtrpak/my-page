import React, { Component } from "react";
import { Parallax } from "react-parallax";

import ProjectPlayerLinks from "../ProjectPlayerLinks";
import parallaxImg2 from "../../photos/prague.jpg";

class ProjectSection extends Component {
  constructor() {
    super();
    this.state = {
      strength: 300,
      height: 500
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
        strength: 100,
        height: 400
      });
    } else if (window.innerWidth > 1200) {
      this.setState({
        strength: 500,
        height: 700
      });
    } else {
      this.setState({
        strength: 300,
        height: 500
      });
    };
  };

  render() {
    return (
      <div>
        <Parallax bgImage={parallaxImg2} strength={this.state.strength} style={{ height: this.state.height }}>
          <ProjectPlayerLinks />
        </Parallax>
      </div>
    );
  };
};

export default ProjectSection;