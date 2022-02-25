import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import background from "../img/flag_bg0.png";
import EventList from "./EventList";

const Events = () => {
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

  const [events, setevents] = useState();

  const [error, setError] = useState("");

  const fetchEvents = async () => {
    const docRef = doc(db, "data", "events");
    const docSnap = await getDoc(docRef);
    const dataTest = docSnap.data();
    const mapping = [];
    for (let i = 0; i <= dataTest.events.length - 1; i++) {
      mapping.push(
        <div className="col">
          <EventList {...dataTest.events[i]} />{" "}
        </div>
      );
    }
    setevents(mapping);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <NavBar />

      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(0, 0, 0, .1)",
          backgroundPosition: "-5%",
          backgroundSize: "contain",
          padding: "3%",
        }}
      >
        <div className="container margin-t-sm">
          <div className="row row-cols-auto justify-content-center">
            {events ? events : console.log("loading")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
