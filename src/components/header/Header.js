import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';

const Header = () => {
  const classes = useStyles();
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

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

export default Header;