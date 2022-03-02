import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import SubHero from "./SubHero";
import AccordionToModal from "./modals/AccordionToModal";
import { Accordion, Container, Button, Stack, Row, Col } from "react-bootstrap";
import MainModal from "./modals/MainModal";
import { UpdateData } from "./Trackers/UpdateData";
import trainingBackground from "../img/training-background.jpg";
import TrainingCard from "./cards/TrainingCard";
import { trainingData } from "./data/pullThis";

const Trainings = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCYheISxbTluSeR1As2z5M0_rbdEQeA0dw",
    authDomain: "wsdv-production-a0be7.firebaseapp.com",
    projectId: "wsdv-production-a0be7",
    storageBucket: "wsdv-production-a0be7.appspot.com",
    messagingSenderId: "1002532901142",
    appId: "1:1002532901142:web:b2799742e960d45bdc8037",
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  const [data, setData] = useState();

  const [moreItems, setMoreItems] = useState([]);

  const [error, setError] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const iFrameInAccordion = (url) => {
    return (
      <iframe
        loading="lazy"
        src={url}
        width="100%"
        height="480"
        frameBorder="0"
        scrolling="no"
        seamless=""
      />
    );
  };

  const fetchData = async () => {
    const docRef = doc(db, "data", "RSVp8ljO95Dpwa0oSs0G");
    const docSnap = await getDoc(docRef);
    const dataTest = docSnap.data();
    await setData(dataTest);
  };

  const generateAccordionItems = async () => {
    const accordionPath = doc(db, "data", "ratedConditions");
    const accordionSnap = await getDoc(accordionPath);
    const accordionItems = await accordionSnap.data().moreItems;
    const containerArray = [];

    for (let i = 0; i < accordionItems.length; i++) {
      const bodyAccordion = [];
      accordionItems[i].urls.forEach((element, index) => {
        bodyAccordion.push(
          <Button
            type="button"
            style={{ margin: "1%" }}
            target="_blank"
            key={"button_" + element.title + index}
            href={element.url}
          >
            {element.title}
          </Button>
        );
      });

      containerArray.push(
        <AccordionToModal
          number={i}
          uniqueKey={"main" + accordionItems[i].category + i}
          title={accordionItems[i].category}
          insideAccordion={bodyAccordion}
        />
      );
    }

    await setMoreItems(containerArray);
  };

  useEffect(() => {
    fetchData();
    generateAccordionItems();
  }, []);

  return (
    <div>
      <NavBar />

      {/* Start of Useful Documents */}

      <div
        style={{
          backgroundImage: `url(${trainingBackground})`,
          backgroundSize: "cover",
          opacity: ".3",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
      />

      <div
        style={{
          height: "85vh",
          width: "100%",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        {/* Start of SubHero */}

        <SubHero
          title="TRAINING"
          backgroundImage="https://images.unsplash.com/photo-1499188073299-5bd9060e044b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        />

        {/* End of SubHero */}

        <section
          style={{ paddingTop: "5%", textAlign: "center", zIndex: "10" }}
        >
          <div>
            <div>
              <h1>USEFUL DOCUMENTS</h1>

              <p>Learn more about your disabilities and benefits</p>
            </div>
          </div>
          <Container>
            <Row>
              {trainingData().map((data) => {
                return (
                  <Col lg={true} className="d-flex justify-content-center m-3">
                    <TrainingCard {...data} />
                  </Col>
                );
              })}
            </Row>

            <h1 style={{ marginTop: "5%" }}> RATED CONDITIONS </h1>

            <MainModal />
            <Accordion style={{ marginTop: "5%" }}>{moreItems}</Accordion>

            <h1 style={{ marginTop: "5%" }}> URGENT CARE BENEFIT </h1>
            <Accordion style={{ marginTop: "5%" }}>
              <AccordionToModal
                number={moreItems.length + 1}
                title="Urgent Care Benefit"
                uniqueKey="mainOutside_2"
                insideAccordion={iFrameInAccordion(
                  "https://drive.google.com/file/d/1dAW0POqeGmRebGJt7xu-ebrLs2VPrAkl/preview"
                )}
              />
            </Accordion>

            <h1 style={{ marginTop: "5%" }}> TEMPORARY 100% RATINGS </h1>
            <Accordion style={{ marginTop: "5%" }}>
              <AccordionToModal
                number={moreItems.length + 1}
                title="Temporary 100% Ratings"
                uniqueKey="mainOutside_2"
                insideAccordion={iFrameInAccordion(
                  "https://drive.google.com/file/d/1ICAPl_yjhCK5dbDuH9fGuj4mm1jRQv1E/preview"
                )}
              />
            </Accordion>

            <h1 style={{ marginTop: "5%" }}>
              {" "}
              DISABILITY COMPENSATION LETTER{" "}
            </h1>
            <Accordion style={{ marginTop: "5%" }}>
              <AccordionToModal
                number={moreItems.length + 1}
                title="Disability Compensation letter"
                uniqueKey="mainOutside_2"
                insideAccordion={
                  <Button
                    href="https://drive.google.com/file/d/18W3Fuwia4WFtHXSmVkR4l8UiWPyb1Pqy/"
                    target="_blank"
                  >
                    Disability Compensation Letter
                  </Button>
                }
              />
            </Accordion>

            <h1 style={{ marginTop: "5%" }}> CHAMPVA </h1>
            <Accordion style={{ marginTop: "5%" }}>
              <AccordionToModal
                number={moreItems.length + 1}
                title="CHAMPVA"
                uniqueKey="mainOutside_2"
                insideAccordion={iFrameInAccordion(
                  "https://drive.google.com/file/d/1pJHThMFpyJsN0g5S0_Lz27OgQTMUsvm8/preview"
                )}
              />
            </Accordion>
          </Container>
        </section>
      </div>

      {/* End of Useful Documents */}

      <Footer />
    </div>
  );
};

export default Trainings;
