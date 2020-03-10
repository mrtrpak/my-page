import React from "react";
import { Button } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export default function ScrollTopBtn() {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Button variant="contained" endIcon={<ArrowUpwardIcon />} onClick={backToTop}>
      Back to
    </Button>
  );
};