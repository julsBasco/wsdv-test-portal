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

      <Container
        className="overflow-scroll"
        style={{ height: "90vh", marginTop: "5%" }}
      >
        <h1> Watch Now</h1>
      </Container>

      <Footer />
    </div>
  );
}

export default VideoLib;
