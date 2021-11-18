import React, { useState } from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { ToLogoutSession } from "./ToLogoutSession";
import "./CSS/NavBar.css";
import logo from "../img/logo1.png";

function NavBar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await ToLogoutSession(currentUser.email);
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand> <Link className="color__link" to="/">WSDV Web Portal</Link></Navbar.Brand> */}
            <Navbar.Brand>
              {" "}
              <Link className="color__link" to="/">
                <img src={logo} />{" "}
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/videos">
                  Videos
                </Link>
                <Link className="nav-link" to="/trainings">
                  Training
                </Link>
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </Nav>
              <Nav>
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    Signed in as: {currentUser.email}{" "}
                    <Button variant="link" onClick={handleLogout}>
                      logout
                    </Button>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default NavBar;
