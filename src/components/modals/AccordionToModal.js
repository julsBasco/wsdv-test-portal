import React from "react";
import { Accordion } from "react-bootstrap";

const AccordionToModal = (props) => {
  return (
    <Accordion.Item eventKey={props.number} key={props.uniqueKey}>
      <Accordion.Header key={props.uniqueKey}>{props.title}</Accordion.Header>
      <Accordion.Body>
        <Accordion>{props.insideAccordion}</Accordion>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionToModal;
