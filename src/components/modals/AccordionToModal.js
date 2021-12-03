import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionToModal = (props) => {
  return (
    <Accordion.Item eventKey={props.number}>
      <Accordion.Header>{props.title}</Accordion.Header>
      <Accordion.Body>
        <iframe
          src={props.url}
          width="100%"
          height="480"
          frameBorder="0"
          scrolling="no"
          seamless=""
        />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionToModal;
