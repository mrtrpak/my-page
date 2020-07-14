import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";

import PlayerAndLinks from "../PlayerAndLinks";
import parallaxImg2 from "../../photos/prague.jpg";

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
    function updPage() {
      updParallax();
    }
    window.addEventListener("resize", updPage);
    return () => window.removeEventListener("resize", updPage);
  }, []);

  return (
    <Parallax bgImage={parallaxImg2} strength={strength}  >
      <div className="playLinkGrid" style={{ height: height }}>
        <PlayerAndLinks />
      </div>
    </Parallax>
  );
};