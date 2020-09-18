import React, { useState, useEffect } from "react";
import { Route, Link, withRouter } from "react-router-dom";
import API from "../API";
import Inn from "./Inn";
import TownSquare from "./TownSquare";
import Armory from "./Armory";
import Trophy from "./Trophy";
import Shop from "./Shop";
import WarRoom from "./WarRoom";
import Error from "../components/Error";

function GoalQuest({ email, match }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log(userData);
    (async () => {
      try {
        if (!userData) {
          const data = await API.getUserData(email);
          return setUserData(data);
        }
      } catch (error) {
        if (error) return <Error />;
      }
    })();
  }, [userData, email]);
  return (
    <div>
      <p>Welcome To Goal Quest {email}</p>
      <div>
        <Link to={`${match.url}/town-square`}>Town Square</Link>
        <Link to={`${match.url}/inn`}>Inn</Link>
        <Link to={`${match.url}/war-room`}>War Room</Link>
        <Link to={`${match.url}/armory`}>Armory</Link>
        <Link to={`${match.url}/trophy-room`}>Trophy Room</Link>
        <Link to={`${match.url}/shop`}>Shop</Link>
        <Route path={`${match.path}/town-square`} component={TownSquare} />
        <Route
          path={`${match.path}/inn`}
          render={() => <Inn userQuests={userData.quests} />}
        />
        <Route path={`${match.path}/war-room`} component={WarRoom} />
        <Route path={`${match.path}/armory`} component={Armory} />
        <Route path={`${match.path}/trophy-room`} component={Trophy} />
        <Route path={`${match.path}/shop`} component={Shop} />
      </div>
    </div>
  );
}
export default withRouter(GoalQuest);
