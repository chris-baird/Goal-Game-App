import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import GoalQuest from "./pages/GoalQuest";
import WithAuth from "./components/WithAuth";
import { Container } from "reactstrap";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <Container>
        <nav>
          <ul>
            {/* Temp logout may refactor*/}
            <li>{user ? <a href="/">Logout</a> : <Link to="/">Home</Link>}</li>
            {!user && (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/goalquest">
            <WithAuth user={user}>
              {() => <GoalQuest email={user.email} />}
            </WithAuth>
          </Route>
          <Route path="/register">
            <Register user={user} setUser={setUser} />
          </Route>
          <Route path="/">
            <Home user={user} setUser={setUser} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
