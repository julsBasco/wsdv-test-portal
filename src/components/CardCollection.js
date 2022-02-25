import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CSS/CardCollection.css";

function CardCollection(props) {
  return (
    <div className="cardCollection">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <Card.Text style={{ height: "5rem", overflow: "auto" }}>
            {props.text}
          </Card.Text>
          <Button variant="primary" href={props.url} target="_blank">
            Watch Now
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCollection;
