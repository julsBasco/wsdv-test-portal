import React from "react";
import { Card, Button } from "react-bootstrap";

const TrainingCard = (props) => {
  const { title, text, modal, blank, link, component } = props;
  const clickHandler = () => {
    {
      modal && <>component</>;
    }

    {
      blank && window.open(`${link}`);
    }
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ height: "60px", overflow: "auto" }}>
          {text}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary" onClick={clickHandler}>
          Read Article
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TrainingCard;
