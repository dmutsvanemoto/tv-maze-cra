import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { ShowPage } from "./pages/Show/ShowPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shows/:id">
          <ShowPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
