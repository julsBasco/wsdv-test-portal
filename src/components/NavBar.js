import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function NavBar(props) {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/wsdv-web-portal">WSDV Web Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link href="/wsdv-web-portal">Home</Nav.Link>
                            <Nav.Link href="/wsdv-web-portal/videos">Videos</Nav.Link>
                            <Nav.Link href="/wsdv-web-portal/calendar">Schedule</Nav.Link>
                    </Nav>
                    <Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                             Signed in as: {props.name} <a href="#login">logout</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
