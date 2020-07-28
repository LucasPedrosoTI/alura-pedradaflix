import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./containers/Home";
import NewVideo from "./containers/NewVideo";
import Page404 from "./containers/Page404";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />

        <Route component={NewVideo} path="/create/video" />

        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default Routes;
