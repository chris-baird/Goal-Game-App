import React, { useState, useEffect } from "react";
import Quest from "../Quest/";

function QuestList({ userQuests }) {
  const [quests, setQuests] = useState([]);

  useEffect(() => {
    console.log(quests);
    (async () => {
      setQuests(userQuests);
    })();
  }, [userQuests, quests]);
  return (
    <div>
      <h3>Quest List</h3>
      {quests.map((quest) => {
        return <Quest key={quest._id} quest={quest} />;
      })}
    </div>
  );
}

export default QuestList;