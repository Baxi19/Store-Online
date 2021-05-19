import { makeStyles } from "@material-ui/core";

export const stylesApp = makeStyles((theme) => ({
  
  
buttonAddModal: {
    marginLeft: "0.8rem",
    marginTop: "0.8rem",
    backgroundColor: theme.palette.success.main,
    color: "white",
    "&:hover": {
      background: theme.palette.success.dark,
    },
  },

  buttonCancelModal: {
    marginLeft: "0.8rem",
    marginTop: "0.8rem",
    backgroundColor: theme.palette.error.main,
    color: "white",
    "&:hover": {
      background: theme.palette.error.dark,
    },
  },
}));

export default stylesApp;
