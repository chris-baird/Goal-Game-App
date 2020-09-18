import React from "react";
import QuestList from "../components/QuestList";

function Inn({ userQuests }) {
  return (
    <div>
      <h2>Welcome To The Inn.</h2>
      <ul>
        <li>View My Quests</li>
        <li>Craft New Quest</li>
      </ul>
      <QuestList userQuests={userQuests} />
    </div>
  );
}

export default Inn;
