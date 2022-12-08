import Router from "./routes/Router";
import * as React from "react";
import { Switch } from "react-router";

const App = (): JSX.Element => {
  return (
    <Switch>
      <Router></Router>
    </Switch>
  );
};

export default App;
