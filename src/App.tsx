import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shows/:id" />
      </Switch>
    </Router>
  );
};

export default App;
