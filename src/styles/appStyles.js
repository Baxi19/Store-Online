import { makeStyles } from "@material-ui/core";

export const stylesApp = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },  
  
  buttonAddModal: {
    marginLeft: "0.8rem",
    marginTop: "0.8rem",
    backgroundColor: theme.palette.success.main,
    color: "white",
    "&:hover": {
      background: theme.palette.success.dark,
    },
  },

}));

export default stylesApp;
