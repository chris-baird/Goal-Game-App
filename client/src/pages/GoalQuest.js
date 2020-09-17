import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import API from '../API';
function Sub() {
  return <h1>Forge Quests</h1>;
}

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
  }, [userData]);
  return (
    <div>
      <p>Welcome To Goal Quest {email}</p>
      <div>
        <h2>Actions</h2>
        <Link to={`${match.url}`}>Dashboard</Link>
        <Link to={`${match.url}/forge`}>Forge Quests</Link>
        <Route path={`${match.path}/forge`} component={Sub} />
        <Route path={`${match.path}/`} />
      </div>
    </div>
  );
}
export default withRouter(GoalQuest);
