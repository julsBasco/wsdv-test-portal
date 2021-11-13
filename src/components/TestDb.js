import React, { useState, useEffect } from 'react'
import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc} from "firebase/firestore"

const TestDb = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD_HKFcESvPZ2v6oPaMSVPAtGhvCGS3bWc",
    
        authDomain: "wsdv-development.firebaseapp.com",
      
        projectId: "wsdv-development",
      
        storageBucket: "wsdv-development.appspot.com",
      
        messagingSenderId: "978428886119",
      
        appId: "1:978428886119:web:3d7247572fba40344628c2"
      
    
    }
    
    const app = initializeApp(firebaseConfig)
    
    const db = getFirestore(app);

    const [data, setData] = useState({});

    const fetchData = () => {

      
            const docRef = doc(db, "data", "RSVp8ljO95Dpwa0oSs0G");

            const docSnap = getDoc(docRef);

            const dataTest = docSnap.data();

            setData(dataTest)

        

            console.log("Document data:", dataTest);
    }
    useEffect(() => {
        fetchData();
    }, {})

  
}

export default TestDb
