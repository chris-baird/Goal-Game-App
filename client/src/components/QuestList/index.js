import React from "react";
import Quest from "../Quest/";
import { Row, Col } from "reactstrap";

function QuestList({ userQuests }) {
  return (
    <>
      <h3>Your Quests</h3>
      <Row>
        {userQuests.map((quest) => {
          return <Quest key={quest._id} quest={quest} />;
        })}
      </Row>
    </>
  );
}

export default QuestList;
