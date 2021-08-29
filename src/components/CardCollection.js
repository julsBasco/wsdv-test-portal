import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'

function CardCollection(props) {
    return (
        <>
                
                <Col md={3} lg={4} className="cardCollection" >
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ props.img } />
                    <Card.Body>
                        <Card.Title> { props.title } </Card.Title>
                        <Card.Text>
                        { props.text }
                        </Card.Text>
                        <Button variant="primary">Watch Now</Button>
                    </Card.Body>
                    </Card>
                </Col>
            

            
        </>
    )
}

export default CardCollection
