import React from "react";
import QuestList from "../components/QuestList";

function Inn({ userQuests }) {
  return (
    <div>
      Inn <QuestList userQuests={userQuests} />
    </div>
  );
}

export default Inn;
