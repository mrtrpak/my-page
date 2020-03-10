import React from "react";
import { Paper } from "@material-ui/core";

import NavBar from "../../components/NavBar";
import AboutSection from "../../components/AboutSection";
import AboutDivider from "../../components/AboutDivider";
import ProjectSection from "../../components/ProjectSection";
import Footer from "../../components/Footer";

import "./style.css";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <AboutSection />
      <Paper>
        <AboutDivider />
      </Paper>
      <ProjectSection />
      <Footer />
    </div>
  );
};