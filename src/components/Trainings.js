import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import SubHero from "./SubHero";
import Button from "react-bootstrap/Button";
import MainModal from "./modals/MainModal";

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

  const [error, setError] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const fetchData = async () => {
    const docRef = doc(db, "data", "RSVp8ljO95Dpwa0oSs0G");

    const docSnap = await getDoc(docRef);

    const dataTest = docSnap.data();

    await setData(dataTest);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}>
      <NavBar />

      {/* Start of SubHero */}

      <SubHero
        title="TRAINING"
        backgroundImage="https://images.unsplash.com/photo-1499188073299-5bd9060e044b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
      />

      {/* End of SubHero */}

      {/* Start of Useful Documents */}
      <div className="bg-light bg-gradient">
        <section style={{ padding: "5%", textAlign: "center" }}>
          <div>
            <div className="">
              <h1>USEFUL DOCUMENTS</h1>

              <p>Learn more about your disabilities and benefits</p>
            </div>
          </div>

          <section
            className="d-flex  justify-content-center container"
            style={{ padding: "5%" }}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => setModalShow(true)}
            >
              Rating Table
            </Button>
          </section>

          <MainModal show={modalShow} onHide={() => setModalShow(false)} />
        </section>
      </div>

      {/* End of Useful Documents */}

      <Footer />
    </div>
  );
};

export default Trainings;

{
  /* <iframe
            src="https://drive.google.com/file/d/1C_ADDX85ASADRnthj10eodcNithw-5if/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>

          <div
            style={{ width: "640px", height: "480px", position: "relative" }}
          >
            <iframe
              src="https://drive.google.com/file/d/1C_ADDX85ASADRnthj10eodcNithw-5if/preview"
              width="640"
              height="480"
              frameborder="0"
              scrolling="no"
              seamless=""
            />

            <div
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                opacity: "0",
                right: "0px",
                top: "0px",
              }}
            >
              &nbsp;
            </div> */
}
