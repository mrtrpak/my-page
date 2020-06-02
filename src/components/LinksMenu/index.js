import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Grid, Menu, MenuItem, ListItemIcon, ListItemText, Link } from "@material-ui/core";
import { AssignmentInd, GitHub, LinkedIn } from "@material-ui/icons";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button style={{ padding: "5px" }}
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Contact Me
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <GitHub fontSize="small" />
          </ListItemIcon>
          <Link style={{ textDecoration: "none" }} color="inherit" href="https://github.com/mrtrpak" target="_blank" rel="noreferrer">
            <ListItemText primary="Github" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <LinkedIn fontSize="small" />
          </ListItemIcon>
          <Link style={{ textDecoration: "none" }} color="inherit" href="https://www.linkedin.com/in/michael-trpak/" target="_blank" rel="noreferrer">
            <ListItemText primary="LinkedIn" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AssignmentInd fontSize="small" />
          </ListItemIcon>
          <Link style={{ textDecoration: "none" }} color="inherit" href="https://docs.google.com/document/d/1S9v9bpBBEbvUwknThouJwZQDInZZm4TMdNDa69TNYIE/edit?usp=sharing" target="_blank" rel="noreferrer">
            <ListItemText primary="Resume" />
          </Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Grid container justify="center" alignItems="center">
            <a href="mailto:mrtrpak3@gmail.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              Email Me!
            </a>
          </Grid>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};