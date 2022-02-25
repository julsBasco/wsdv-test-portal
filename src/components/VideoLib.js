import React from "react";
import { Container, Accordion } from "react-bootstrap";
import CardCollection from "./CardCollection";
import NavBar from "./NavBar";
import Footer from "./Footer";
import SubHero from "./SubHero";

function VideoLib() {
  return (
    <div>
      <NavBar />
      <SubHero
        title="Video Library"
        caption="Watch. Learn. Improve"
        backgroundImage="https://images.unsplash.com/photo-1588082340937-318a52b0e711?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBhdHJpb3RpY3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />

      <Container className="mt-4">
        <h1> Watch Now</h1>
        <div className="row">
          <div className="col">
            <CardCollection
              img="https://www.va.gov/img/design/logo/va-og-twitter-image.png"
              title="VA.gov Veterans Affairs"
              text="How to file an intent to file"
              url="https://drive.google.com/file/d/1NFjDhfH3RmGciki__pEhs6lvwaPc7tab/view?usp=sharing"
            />
          </div>
          <div className="col">
            <CardCollection
              img="https://www.va.gov/img/design/logo/va-og-twitter-image.png"
              title="VA.gov Veterans Affairs"
              text="Learn more, as Veteran Coach Mark educate you on what to do in a C&P exam"
              url="https://drive.google.com/file/d/1Yj9b8Sx90zoBGs0OtzKpgeUfHqSunxjS/view?usp=sharing"
            />
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
}

export default VideoLib;
