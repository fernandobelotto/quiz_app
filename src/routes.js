import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './view/Home'
import QuizDetail from "./view/QuizDetail";

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/quiz/:category">
            <QuizDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}