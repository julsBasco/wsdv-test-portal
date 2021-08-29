import React from 'react'
import { Card, Col, Container, Form, Row, Button } from 'react-bootstrap'

function Login() {
    return (
        <div>
            <Container className='d-flex justify-content-center' >
                <Row>
                    <Col>    
                        <Card bg='light' border='white' style = {{maxWidth: '70rem', minWidth: '30rem',  maxHeight:'70rem', minHeight:'35rem', margin: '5%'}}  >
                            <Card.Img variant="top" src='https://images.unsplash.com/photo-1495567720989-cebdbdd97913?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80' style = {{height:'20vh',}} />
                            <Card.Title style={{textAlign:'center', fontSize: '3rem'}}></Card.Title>
                            <Container className="justify-content-center" style={{marginTop:'10%'}}  >
                                <Form.Label>Username</Form.Label>
                                
                                <Form.Control type="text" placeholder="Enter Username"   />
                                <Form.Label style={{marginTop:'5%'}}>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password"/>
                            </Container>
                            
                            <Container className="d-flex justify-content-center"  >
                                <Button variant="secondary" size="lg" style={{marginTop:'5%', width: '20%'}}>Login</Button>
                            </Container>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
