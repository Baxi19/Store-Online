import { createMuiTheme } from "@material-ui/core/styles";

// Custom theme
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
      dark: "#28B401",
      main: "#008300",
    },
    success: {
      main: "#5680e9",
      dark: "#0054b6",
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
