import { makeStyles } from "@material-ui/core";

// Styles of app
export const stylesApp = makeStyles((theme) => ({
  // Cards
  root: {
    maxWidth: 200,
    height: 320,
    float: "left",
    padding: "16px",
    margin: "16px",
  },

  img: {
    borderRadius: "10%",
  },

  // Header
  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

}));

export default stylesApp;
