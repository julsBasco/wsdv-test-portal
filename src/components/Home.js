import React, { useState, useEffect } from "react";
import { Container, Image, Card, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import NavBar from "./NavBar";
import Footer from "./Footer";
import CardCollection from "./CardCollection";
import "./CSS/Home.css";
import { useAuth } from "../contexts/AuthContext";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { UpdateTracker } from "./Trackers/UpdateTracker";

function Home() {
  const firebaseConfig = {
    apiKey: "AIzaSyD_HKFcESvPZ2v6oPaMSVPAtGhvCGS3bWc",

    authDomain: "wsdv-development.firebaseapp.com",

    projectId: "wsdv-development",

    storageBucket: "wsdv-development.appspot.com",

    messagingSenderId: "978428886119",

    appId: "1:978428886119:web:3d7247572fba40344628c2",
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const [home, setHome] = useState([]);

  const [featured, setFeatured] = useState();

  const { currentUser } = useAuth();

  async function updateTracker() {
    try {
      await UpdateTracker(currentUser.email);
    } catch {
      console.log("hindi nagtuloy sad");
    }
  }

  const homeSection = async () => {
    const docHome = doc(db, "data", "home");
    const snapHome = await getDoc(docHome);
    const dataHome = snapHome.data();
    const mapa = [];
    for (let i = dataHome.videos.length - 1; i >= 0; i--) {
      mapa.push(<CardCollection {...dataHome.videos[i]} />);
    }
    setFeatured(dataHome.videos[dataHome.videos.length - 1]);
    setHome(mapa);
  };

  useEffect(() => {
    homeSection();
    updateTracker();
  }, []);
  return (
    <div className="homeBody">
      <NavBar />
      <div className="forBackgroundOverlay1"> </div>
      <div className="forBackgroundOverlay2"></div>
      <section className="heroSection">
        <div className="heroTitle">
          <h1>LETS BUILD YOUR</h1>
          <h1 className="textWhite">STRATEGY</h1>
          <p>
            Learn from our amazing coaches and build a winning strategy tailored
            to your success
          </p>
        </div>

        <div className="ceoGreetings">
          <p>
            Hello, and welcome to WSDV's portal! I'm Derek Jones, CEO of WSDV
            and am very excited to have an opportunity to change your life! Feel
            free to navigate our wealth of free information provided to our
            clients only. If you have any questions at all concerning this page,
            please contact your coach or message me. My ultimate goal is to
            assist you in getting the rating you truly deserve for serving our
            great nation.
          </p>
        </div>

        <Image
          className="imgOverlay"
          src="https://images.unsplash.com/photo-1464462605615-4ff728ecc301?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        />
      </section>
      {/* <div className="hero-container">
        <div className="hero-overlay">
          <div className="hero-wrapper-overlay">
            <h1 className="hero-text-h1">
              LETS BUILD YOUR <br />
              <span style={{ color: "white" }}>STRATEGY</span>{" "}
            </h1>

            <h3 style={{ textAlign: "center", padding: "5%" }}>
              Learn from our amazing coaches and build a winning strategy
              tailored to your success
            </h3>
          </div>
        </div>
        <div className="hero-message-ceo">
          <h3 style={{ textAlign: "center", padding: "5%" }}>
            Hello, and welcome to WSDV's portal! I'm Derek Jones, CEO of WSDV
            and am very e
          </h3>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1464462605615-4ff728ecc301?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          style={{
            width: "50%",
            height: "90vh",
            gridColumn: "1 / span 2",
            gridRow: "1",
          }}
        />
      </div> */
      /* <>
        <Alert variant="secondary" style={{ magin: "0%" }}>
          Information: We will be having our quick meeting today. New here?{" "}
          <Alert.Link>Click here</Alert.Link> to check the schedules
        </Alert>
      </>

      <Container>
        {featured ? (
          <Card>
            <Card.Header>New Upload!</Card.Header>
            <Card.Body>
              <Card.Title>{featured.title}</Card.Title>
              <Card.Text>{featured.text}</Card.Text>
              <Button variant="primary" href={featured.url}>
                Watch now
              </Button>
            </Card.Body>
          </Card>
        ) : (
          <div> loading </div>
        )}
      </Container>

      <Container>
        <div className="d-inline-flex flex-wrap justify-content-center">
          {home ? home : <div> loading </div>}
        </div>
      </Container> */}
      <Footer />
    </div>
  );
}

export default Home;
