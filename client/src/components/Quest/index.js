import React from "react";

function Quest({ quest }) {
  return (
    <div>
      <h3>Quest Name: {quest.questName}</h3>
      <p>Quest Description: {quest.questDescription}</p>
      <p>Quest Difficulty: {quest.questDifficulty}</p>
      <p>Quest Complete: {quest.questCompleted ? "Yes" : "No"}</p>
      <p>Mission Points: {quest.questMissionPoints}Points</p>
    </div>
  );
}

export default Quest;
