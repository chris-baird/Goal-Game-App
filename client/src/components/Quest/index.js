import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
} from "reactstrap";

function Quest({ quest }) {
  return (
    <Col xs={12} sm={12} md={4} lg={4}>
      <Card>
        <span>{quest.difficulty}</span>
        <CardBody>
          <CardTitle>
            <h4>{quest.name}</h4>
          </CardTitle>
          <CardSubtitle>
            <em>Description</em>
          </CardSubtitle>
          <CardText>{quest.description}</CardText>
          <Button color="warning">Edit</Button>
          <Button color="danger">Delete</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Quest;
