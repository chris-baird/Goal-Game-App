import React from "react";
import Quest from "../Quest/";

function QuestList({ userQuests }) {
  return (
    <div>
      <h3>Quests</h3>
      {userQuests.map((quest) => {
        return <Quest key={quest._id} quest={quest} />;
      })}
    </div>
  );
}

export default QuestList;
