import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import SubHero from "./SubHero";
import AccordionToModal from "./modals/AccordionToModal";
import { Accordion, Container } from "react-bootstrap";

const Trainings = () => {
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

  const [data, setData] = useState();
  const [moreItems, setMoreItems] = useState([]);

  const [error, setError] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    const docRef = doc(db, "data", "RSVp8ljO95Dpwa0oSs0G");
    const docSnap = await getDoc(docRef);
    const dataTest = docSnap.data();
    await setData(dataTest);
  };

  const generateAccordionItems = async () => {
    const accordionPath = doc(db, "data", "PZMKLMYycZ8gz3noquB7");
    const accordionSnap = await getDoc(accordionPath);
    const accordionItems = await accordionSnap.data().moreItems;
    const containerArray = [];
    for (let i = 0; i < accordionItems.length; i++) {
      containerArray.push(
        <AccordionToModal
          number={i}
          key={i}
          title={accordionItems[i].title}
          url={accordionItems[i].url}
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

        <img
          src="https://images.unsplash.com/photo-1510265382668-7b564935d7b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          style={{
            opacity: "0.5",
            position: "fixed",
            top: "0px",
            width: "100%",
            zIndex: "-1",
          }}
        />
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
            <h1 style={{ marginTop: "5%" }}>
              {" "}
              HOW TO WRITE A PERSONAL STATEMENT{" "}
            </h1>
            <Accordion style={{ marginTop: "5%" }}>
              <AccordionToModal
                number={moreItems.length + 1}
                title="Writing a Personal Statement"
                url="https://drive.google.com/file/d/14e0Hzks5x1xz5OefJcaiaYmBaHYnWI7H/preview"
              />
            </Accordion>
            <h1 style={{ marginTop: "5%" }}> RATING TABLES </h1>
            <Accordion style={{ marginTop: "5%" }}>{moreItems}</Accordion>
          </Container>
        </section>
      </div>

      {/* End of Useful Documents */}

      <Footer />
    </div>
  );
};

export default Trainings;
