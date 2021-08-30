import React, { useState } from 'react'
import Home from './Home'
import VideoLib from './VideoLib'
import Schedule from './Schedule'
import { Nav, Container, Navbar, Button } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import {HashRouter as Router, Link, Switch, useHistory, Route } from 'react-router-dom'

function NavBar() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }


    return (
        <div>
            


            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand> <Link to="/">WSDV Web Portal</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link>
                             <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                             <Link to="/videos">Videos</Link>
                            </Nav.Link>
                            <Nav.Link>
                             <Link to="/schedule">Schedule</Link>
                            </Nav.Link>
                        </Nav>
                        <Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: {currentUser.email} <Button variant="link" onClick={ handleLogout }>logout</Button>
                            </Navbar.Text>
                        </Navbar.Collapse>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}

export default NavBar
