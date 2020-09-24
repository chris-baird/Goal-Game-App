import React, { useState, useEffect } from "react";
import QuestList from "../components/QuestList";
import QuestForm from "../components/QuestForm";
import { Button, Row, Col } from "reactstrap";

function Inn({ userId, userQuests, updateQuests }) {
  const [view, setView] = useState("view-quests");

  const handleSetView = (view) => {
    console.log("inside");
    switch (view) {
      case "view-quests":
        return (
          <Col xs={12} sm={12} md={10} lg={10}>
            <QuestList userQuests={userQuests} />
          </Col>
        );
      case "new-quest":
        return <QuestForm userId={userId} updateQuestList={updateQuests} />;
      default:
        return;
    }
  };

  return (
    <>
      <h2 className="text-center">Welcome To The Inn.</h2>
      <Row>
        <Col xs={12} sm={12} md={2} lg={2}>
          <h3>Actions</h3>
          <ul>
            <li>
              <Button onClick={() => setView("view-quests")} color="success">
                {"View Quests"}
              </Button>
            </li>
            <li>
              <Button onClick={() => setView("new-quest")} color="success">
                {"Create A New Quest"}
              </Button>
            </li>
          </ul>
        </Col>
        {handleSetView(view)}

        {/* <Col xs={12} sm={12} md={2} lg={2}>
          <QuestForm userId={userId} updateQuestList={updateQuests} />
        </Col> */}
      </Row>
    </>
  );
}

export default Inn;
