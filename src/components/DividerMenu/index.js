import React from "react";
import { Button, ClickAwayListener, Grow, Grid, Paper, Popper, MenuItem, MenuList, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  }
}));

export default function DividerMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleListKeyDown = e => {
    if (e.key === "Tab") {
      e.preventDefault();
      setOpen(false);
    }
  };

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Grid item>
        <Button ref={anchorRef} aria-controls={open ? "menu-list-grow" : undefined} aria-haspopup="true" onClick={handleToggle}>View My Links</Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow {...TransitionProps} style={{ transformOrigin: placement === "bottom" ? "center top" : "center bottom" }}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem id="githubLink" onClick={handleClose}>
                      <Link style={{ textDecoration: "none" }} color="inherit" href="https://github.com/mrtrpak" target="_blank" rel="noreferrer">Github</Link>
                    </MenuItem>
                    <MenuItem id="linkedInLink" onClick={handleClose} target="_blank">
                      <Link style={{ textDecoration: "none" }} color="inherit" href="https://www.linkedin.com/in/michael-trpak/" target="_blank" rel="noreferrer">LinkedIn</Link>
                    </MenuItem>
                    <MenuItem id="resumeLink" onClick={handleClose} target="_blank">
                      <Link style={{ textDecoration: "none" }} color="inherit" href="https://docs.google.com/document/d/1S9v9bpBBEbvUwknThouJwZQDInZZm4TMdNDa69TNYIE/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </div>
  );
};