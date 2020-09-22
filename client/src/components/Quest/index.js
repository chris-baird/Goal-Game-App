import React from "react";

function Quest({ quest }) {
  return (
    <div>
      <h3>Quest Name: {quest.name}</h3>
      <p>Quest Description: {quest.description}</p>
      <p>Quest Difficulty: {quest.difficulty}</p>
      <p>Quest Complete: {quest.completed ? "Yes" : "No"}</p>
      <p>Mission Points: {quest.missionPoints}Points</p>
    </div>
  );
}

export default Quest;
