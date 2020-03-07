import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

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

export default function NavBar() {
  return (
    <div className="navbar">
      <h1 className="name">MICHAEL TRPAK</h1>
      <Breadcrumbs aria-label="breadcrumb" id="navLinks">
        <GitHubIcon id="github" onClick={linksFunc} />
        <LinkedInIcon id="linkedin" onClick={linksFunc} />
      </Breadcrumbs>
    </div>
  );
};