import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import WithAuth from "./components/WithAuth";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (user) console.log(user);
    // push url state to dashboard & pass user to dashboard
  }, [user]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {user && <span>Welcome{user.email}</span>}
          </ul>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <WithAuth user={user}>{() => <h1>Dashboard</h1>}</WithAuth>
          </Route>
          <Route path="/register">
            <Register user={user} setUser={setUser} />
          </Route>
          <Route path="/">
            <Home user={user} setUser={setUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
