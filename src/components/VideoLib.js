import React from 'react'
import { Container, Row, Carousel } from 'react-bootstrap'
import CardCollection from './CardCollection'
import Footer from './Footer'
import NavBar from './NavBar'


function VideoLib() {
    return (
        <div>
            <>
                <NavBar />
            </>
            <>
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
            </>
            <>
                
            </>
            <>
                <Footer/>
            </>
   
        </div>
    )
}

export default VideoLib
