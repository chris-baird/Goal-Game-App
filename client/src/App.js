import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import GoalQuest from "./pages/GoalQuest";
import WithAuth from "./components/WithAuth";
import { Container } from "reactstrap";

function App() {
  // TESTING END
  return (
    <Router>
      <Container>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/goalquest">
            <WithAuth>{() => <GoalQuest />}</WithAuth>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
