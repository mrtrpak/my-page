import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";

import PlayerAndLinks from "../PlayerAndLinks";
import parallaxImg from "../../photos/prague.jpg";

import "./style.css";

export default function ProjectSection() {

  const [height, setHt] = useState(700);
  const [strength, setStr] = useState(500);

  const updParallax = () => {

    let width = window.innerWidth;

    if (width > 960) {
      setHt(700);
      setStr(500);
    } else {
      setHt(1000);
      setStr(300);
    };
  };

  useEffect(() => {
    function updState() {
      updParallax();
    }
    window.addEventListener("resize", updState);
    return () => window.removeEventListener("resize", updState);
  }, []);

  return (
    <Parallax bgImage={parallaxImg} strength={strength}>
      <div className="playLinkGrid" style={{ height: `${height}px` }}>
        <PlayerAndLinks />
      </div>
    </Parallax>
  );
};