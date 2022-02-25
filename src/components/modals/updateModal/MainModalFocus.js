import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";

const MainModalFocus = (props) => {
  const { title, activate, children } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (activate) {
      handleShow();
    } else {
      handleClose();
    }
  }, [activate]);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default MainModalFocus;
