import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import stylesApp from "../../styles/appStyles";


// This only will show the name of app
const Header = () => {
  const classes = stylesApp();
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <StoreMallDirectoryIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Ingo Store
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;