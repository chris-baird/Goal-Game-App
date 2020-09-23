import React, { useState, useEffect } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import API from "../API";
import Inn from "./Inn";
import TownSquare from "./TownSquare";
import Armory from "./Armory";
import WarRoom from "./WarRoom";
import Error from "../components/Error";

function GoalQuest({ match, history }) {
  const [userData, setUserData] = useState(null);

  const handleUpdateQuests = function (newQuest) {
    // New state object with old values spread on before new values are set.
    const newState = {
      ...userData,
      quests: [...userData.quests, newQuest],
    };
    setUserData(newState);
  };

  const handleLogout = () => {
    const keysToRemove = ["email", "token"];
    keysToRemove.forEach((key) => {
      localStorage.removeItem(key);
    });
    history.push("/");
  };

  useEffect(() => {
    (async () => {
      try {
        if (!userData) {
          const email = localStorage.getItem("email");
          const data = await API.getUserData(email);
          return setUserData(data);
        }
      } catch (error) {
        if (error) return <Error />;
      }
    })();
  }, [userData]);

  return (
    <div>
      <p>Welcome To Goal Quest</p>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <Link to={`${match.url}/town-square`}>Town Square</Link>
        <Link to={`${match.url}/inn`}>Inn</Link>
        <Link to={`${match.url}/war-room`}>War Room</Link>
        <Link to={`${match.url}/armory`}>Armory</Link>
        <Route path={`${match.path}/town-square`} component={TownSquare} />
        <Route
          path={`${match.path}/inn`}
          render={() => (
            <Inn
              userId={userData._id}
              userQuests={userData.quests}
              updateQuests={handleUpdateQuests}
            />
          )}
        />
        <Route path={`${match.path}/war-room`} component={WarRoom} />
        <Route path={`${match.path}/armory`} component={Armory} />
      </div>
    </div>
  );
}
export default withRouter(GoalQuest);
