import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import BookingCoach from './peopleBooking/BookingCoach'
import { Container, Button } from 'react-bootstrap'




function Schedule() {
    return (
        <div>

            <NavBar />
                
                
                <Container>
                    <div className=' d-md-flex justify-content-center align-items-center' style={{width:'100%', height:'100vh'}}>  
                        <div>      
                            <BookingCoach />
                        </div>
                        <div className='' style={{  padding: '5%' }}>
                            <h1> Hi, I'm Derek</h1>
                            <br />
                            <p> euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit </p>
                            <Button>Schedule a Meeting</Button>
                        </div>
                    </div>
                </Container>
                
            <Footer />
        </div>
    )
}

export default Schedule
