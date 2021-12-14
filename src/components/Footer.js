import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";

function Footer() {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" fixed="bottom">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>

            <Container className="d-flex justify-content-end">
              <a
                href="https://facebook.com/VAhelpforvets"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "3%" }}
              >
                <Facebook
                  style={{ color: "white", fontSize: "25px", marginLeft: "3%" }}
                />
              </a>

              <a
                href="https://www.instagram.com/djhelpsvets/"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "3%" }}
              >
                <Instagram
                  style={{ color: "white", fontSize: "25px", marginLeft: "3%" }}
                />{" "}
              </a>

              <a
                href="https://www.linkedin.com/in/derek-jones-b79979216/"
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "3%" }}
              >
                <Linkedin
                  style={{ color: "white", fontSize: "25px", marginLeft: "3%" }}
                />{" "}
              </a>
            </Container>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Footer;
