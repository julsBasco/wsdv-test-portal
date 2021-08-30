import { Container, Image,  Card, Button, Row } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import React from 'react'
import CardCollection from './CardCollection'



function Home() {
    return (
        <div>
              
              
                <div>
                    <Image src="https://i.insider.com/5ef39160f0f41909f84122eb?width=1000&format=jpeg&auto=webp" style={{width: '100%', height: '100vh'}}  />
                </div>
            <>
                    
                <Alert  variant='secondary' style={{magin:'0%' }} >
                    Information: We will be having our quick meeting today. New here? <Alert.Link>Click here</Alert.Link> to check the schedules
                </Alert>

            
            </>
            
            <Container>
                <Card>
                  <Card.Header>Featured</Card.Header>
                  <Card.Body>
                    <Card.Title>Training 101: How not to be a </Card.Title>
                    <Card.Text>
                      Watch the new episode of "Train with Derek" 
                    </Card.Text>
                    <Button variant="primary" href= 'youtube.com'>Watch now</Button>
                  </Card.Body>
                </Card>
            </Container>

            <>
              <Container >
                <Row>

                  <CardCollection title="Do's and Dont's in an Interview" text="discover what to do in the...." img="https://scx1.b-cdn.net/csz/news/800a/2019/2-nature.jpg" />

                  <CardCollection title="Do's and Dont's in an Interview" text="discover what to do in the...." img="https://scx1.b-cdn.net/csz/news/800a/2019/2-nature.jpg" />

                  <CardCollection title="Do's and Dont's in an Interview" text="discover what to do in the...." img="https://scx1.b-cdn.net/csz/news/800a/2019/2-nature.jpg" />

                  <CardCollection title="Do's and Dont's in an Interview" text="discover what to do in the...." img="https://scx1.b-cdn.net/csz/news/800a/2019/2-nature.jpg" />
                  <CardCollection title="Do's and Dont's in an Interview" text="discover what to do in the...." img="https://scx1.b-cdn.net/csz/news/800a/2019/2-nature.jpg" />

                  <CardCollection title="Do's and Dont's in an Interview" text="discover what to do in the...." img="https://scx1.b-cdn.net/csz/news/800a/2019/2-nature.jpg" />

                </Row>

              </Container>
            </>
          

        </div>
    )
}

export default Home
