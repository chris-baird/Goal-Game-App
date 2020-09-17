import React, { useState, useEffect } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import API from "../API";
import Forge from "./Forge";
import Dashboard from "./Dashboard";

function GoalQuest({ email, match }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      console.log(userData);
      try {
        if (!userData) {
          const data = await API.getUserData(email);
          setUserData(data);
        }
      } catch (error) {
        if (error) return <p>Something Broke</p>;
      }
    })();
  }, [userData, email]);
  return (
    <div>
      <p>Welcome To Goal Quest {email}</p>
      <div>
        <h2>Actions</h2>
        <Link to={`${match.url}/dashboard`}>Dashboard</Link>
        <Link to={`${match.url}/forge`}>Forge Quests</Link>
        <Route path={`${match.path}/forge`} component={Forge} />
        <Route path={`${match.path}/dashboard`} component={Dashboard} />
      </div>
    </div>
  );
}
export default withRouter(GoalQuest);
