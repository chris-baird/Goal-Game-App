import React from "react";

function Quest({ quest }) {
  return (
    <div>
      <h3>{quest.questName}</h3>
      <p>{quest.questDescription}</p>
    </div>
  );
}

export default Quest;
