import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./constants";
import { Provider } from "react-redux";
import generateStore from "./redux/store";
import Home from "./components/home/Home";

// When you open the app, you can go to http://localhost:3000 or http://localhost:3000/home
ReactDOM.render(
  <Provider store={generateStore()}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/(home|)" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);