import React from 'react'
import { Card } from 'react-bootstrap'

function BookingCoach() {
    return (
        <div>
            <Card className='' style={{  width: '18rem', borderBottomRightRadius: '9%', borderTopLeftRadius:'9%'}}>
            <Card.Img variant="top" src="https://d5t4h5a9.rocketcdn.me/wp-content/uploads/2020/11/Professional-Headshot-Poses-Blog-Post-1536x1024.jpg" style={{borderTopLeftRadius:'9%', height:'15rem'}} />
            <Card.Body>
                
                <Card.Title className='text-center'>Derek Jones</Card.Title>
                <p>Hi I'm Derek Jones I will be trainig you every second sunday together with my partner coach.</p>
                
            </Card.Body>

            </Card>
        </div>
    )
}

export default BookingCoach
