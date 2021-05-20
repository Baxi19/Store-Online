import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto",
  },

  palette: {
    background: {
      paper: "#FCFCFC",
      default: "#FCFCFC",
    },
    primary: {
      main: "#8860d0",
      dark: "#56349e",
    },
    secondary: {
      main: "#5680e9",
      dark: "#0054b6",
    },
    success: {
      dark: "#008300",
      main: "#28B401",
    },
    error: {
      dark: "#D32F2F",
      main: "#F44336",
    },
    warning: {
      dark: "#FFA000",
      main: "#FFC107",
    },
  },
});
