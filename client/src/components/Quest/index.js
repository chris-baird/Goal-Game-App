import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

function Quest({ quest }) {
  return (
    <Col xs={12} sm={12} md={4} lg={4}>
      <Card>
        <Row>
          <Col>
            <strong>
              <em className="m-1">Quest Points </em>
              <span className="m-1">{quest.missionPoints}</span>
            </strong>
          </Col>
          <Col>
            <div className="text-right mr-1">
              <strong>
                <em className="m-1">Difficulty </em>
                <span>{quest.difficulty}</span>
              </strong>
            </div>
          </Col>
        </Row>

        {/* <span className="ml-auto p-1">Difficulty {quest.difficulty}</span> */}
        <CardBody className="p-1">
          <CardTitle className="m-1">
            <h4 className="m-1 mt-4 mb-4">{quest.name}</h4>
          </CardTitle>
          <CardSubtitle className="m-1">
            <strong>
              <em>Description</em>
            </strong>
          </CardSubtitle>
          <CardText className="m-1">{quest.description}</CardText>

          <Button className="m-1" color="success">
            Complete Quest
          </Button>
          <Button className="m-1" color="warning">
            Edit Quest
          </Button>
          <Button className="m-1" color="danger">
            Delete Quest
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Quest;
