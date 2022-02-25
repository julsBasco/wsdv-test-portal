import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import { LoginChecker } from "./LoginChecker";
import { PushToDbState } from "./PushToDbState";
import "../img/login.jpg";
import "./CSS/Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, logout } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    const loginTest = await LoginChecker(emailRef.current.value);

    if (!loginTest) {
      setLoading(true);
      setError("");
      try {
        const logLag = await login(emailRef.current.value, passwordRef.current.value);
        console.log(logLag)
        await PushToDbState(emailRef.current.value);
        history.push("/");
      } catch {
        setLoading(false);
        await logout();
        setError("login Failed please check username/password");
      }
    } else {
      setError("Please logout the other device to login");
      setLoading(false);
    }
  }

  return (
    <div className="backgroundImg">
      <div className="loginBox">
        <div className="loginContentBox">
          <Card>
            <Card.Body>
              <h2 style={{ textAlign: "center" }}>
                Welcome to WSDV Web Portal
              </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    ref={emailRef}
                    required
                  />
                </Form.Group>
                <Form.Group id="password">
                  <br />
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <br />
                <Button disabled={loading} type="submit">
                  Log In
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
