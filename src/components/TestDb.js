import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const TestDb = () => {
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

  const [data, setData] = useState({});

  const fetchData = () => {
    const docRef = doc(db, "data", "RSVp8ljO95Dpwa0oSs0G");

    const docSnap = getDoc(docRef);

    const dataTest = docSnap.data();

    setData(dataTest);

    console.log("Document data:", dataTest);
  };
  useEffect(() => {
    fetchData();
  }, {});
};

export default TestDb;
