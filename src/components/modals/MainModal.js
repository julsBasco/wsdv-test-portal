import React from "react";
import { Modal, Button } from "react-bootstrap";

const MainModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sample</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Sample</h4>
        <div style={{ width: "640px", height: "480px", position: "relative" }}>
          <iframe
            src="https://drive.google.com/file/d/1pBerHsy_leeN4rFAStM9oSpOJWTiPlHE/preview"
            width="640"
            height="480"
            frameborder="0"
            scrolling="no"
            seamless=""
          />

          <div
            style={{
              width: "80px",
              height: "80px",
              position: "absolute",
              opacity: "0",
              right: "0px",
              top: "0px",
            }}
          >
            &nbsp;
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MainModal;
