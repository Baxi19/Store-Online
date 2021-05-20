import { makeStyles } from "@material-ui/core";

export const stylesApp = makeStyles((theme) => ({
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
}));

export default stylesApp;
