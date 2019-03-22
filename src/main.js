import React, { Component } from "react";

import App from "./App";

import SignIn from "./components/SignIn";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Switch } from "react-router";

class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={SignIn} />
        </Switch>
      </Router>
    );
  }
}

export default Main;
