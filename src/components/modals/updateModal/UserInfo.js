import React, { useState, useRef } from "react";
import { Form, Row, Col, Modal, Button } from "react-bootstrap";
import { useAuth } from "../../../contexts/AuthContext";
import { useDb } from "../../../contexts/DbContext";

const UserInfo = (props) => {
  const { userEmail, userFirstName, userLastName, userLastPasswordUpdate } =
    props;
  const firstName = useRef();
  const lastName = useRef();
  const { currentUser } = useAuth();
  const { updateUserData, toggleUpdateModal } = useDb();
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault();
    const data = {
      firstname: firstName.current.value,
      lastname: lastName.current.value,
      creationTime: currentUser.metadata.creationTime,
    };
    try {
      setLoading(true);
      await updateUserData(data, currentUser.email);
      toggleUpdateModal();
    } catch {
      console.error("some weird shit happend and it not succeed");
    }
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={userEmail} />
        </Col>
      </Form.Group>

      {userFirstName ? (
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              plaintext
              readOnly
              defaultValue={`${userFirstName.toUpperCase()} ${userLastName.toUpperCase()}`}
            />
          </Col>
        </Form.Group>
      ) : (
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control
              disabled={loading}
              className="mb-3"
              ref={firstName}
              type="text"
              placeholder="First Name"
              required
            />
            <Form.Control
              disabled={loading}
              type="text"
              ref={lastName}
              placeholder="Last Name"
              required
            />
          </Col>
        </Form.Group>
      )}

      <Modal.Footer>
        <Button disabled={loading} type="submit" variant="primary">
          submit
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default UserInfo;
