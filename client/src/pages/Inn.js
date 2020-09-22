import React, { useState } from "react";
import QuestList from "../components/QuestList";
import QuestForm from "../components/QuestForm";
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";

function Inn({ userId, userQuests, updateQuests }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <>
      <h2 className="text-center">Welcome To The Inn.</h2>
      <Row>
        <Col xs={12} sm={12} md={2} lg={2}>
          <ul>
            <li>
              <Button color="danger" onClick={toggle}>
                {"Create A Quest"}
              </Button>
            </li>
          </ul>
        </Col>

        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Craft A Quest</ModalHeader>
          <ModalBody>
            <QuestForm userId={userId} />
          </ModalBody>
        </Modal>
        <Col xs={12} sm={12} md={10} lg={10}>
          <QuestList userQuests={userQuests} updateQuests={updateQuests} />
        </Col>
      </Row>
    </>
  );
}

export default Inn;
