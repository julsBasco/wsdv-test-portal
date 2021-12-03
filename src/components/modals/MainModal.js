import React, { useState, useEffect } from "react";
import { Modal, Button, Form, Container, Accordion } from "react-bootstrap";
import AccordionToModal from "./AccordionToModal";

const MainModal = (props) => {
  const [modalItems, setModalItems] = useState([]);
  const generateItems = () => {
    const testItems = [];
    for (let i = 0; i < moreItems.length; i++) {
      testItems.push(
        <AccordionToModal
          number={i}
          key={i}
          title={moreItems[i].title}
          url={moreItems[i].url}
        />
      );
    }
    setModalItems(testItems);
  };

  useEffect(() => {
    generateItems(props.items);
  }, []);
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable="true"
      centered
    >
      <Modal.Header closeButton>
        <h4> RATING TABLE </h4>
      </Modal.Header>
      <Modal.Body>
        <Accordion>{modalItems}</Accordion>
        <Container></Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MainModal;
