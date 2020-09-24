import React from "react";
import QuestList from "../components/QuestList";
import QuestForm from "../components/QuestForm";
import { Button, Row, Col } from "reactstrap";

function Inn({ userId, userQuests, updateQuests }) {
  return (
    <>
      <h2 className="text-center">Welcome To The Inn.</h2>
      <Row>
        <Col xs={12} sm={12} md={2} lg={2}>
          <ul>
            <li>
              <Button color="danger">{"View Quests"}</Button>
            </li>
            <li>
              <Button color="danger">{"Create A New Quest"}</Button>
            </li>
          </ul>
        </Col>
        <Col xs={12} sm={12} md={10} lg={10}>
          <QuestList userQuests={userQuests} />
        </Col>
        {/* <Col xs={12} sm={12} md={2} lg={2}>
          <QuestForm userId={userId} updateQuestList={updateQuests} />
        </Col> */}
      </Row>
    </>
  );
}

export default Inn;
