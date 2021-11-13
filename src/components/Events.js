import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc} from "firebase/firestore"
import background from'../img/flag_bg0.png'
import EventList from './EventList'


const Events = () => {
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

    const [events, setevents] = useState();

    const [error, setError] = useState("");

  


    const fetchEvents = async () => {      
            const docRef = doc(db, "data", "events");
            const docSnap =  await getDoc(docRef);
            const dataTest = docSnap.data();
            const mapping = [];
            for(let i=0; i <= dataTest.events.length -1 ; i++){
                mapping.push(<div className="col" ><EventList {...dataTest.events[i]} /> </div>)
            }
            setevents(mapping);
    }

    useEffect(() => {
        fetchEvents();
    }, [] )
    
    return (



        <div>
            <NavBar />

            <div 
                style={{
                    backgroundImage:`url(${background})`, 
                    backgroundRepeat:'no-repeat', 
                    backgroundColor: 'rgba(0, 0, 0, .1)', 
                    backgroundPosition: '-5%', 
                    backgroundSize: 'contain', 
                    padding:'3%' 
                    }}>
                <div className="container margin-t-sm">
                    <div className="row row-cols-auto justify-content-center">
                    {events ? (events) : console.log('loading')}
                    </div>
                </div>

            </div>
         
        </div>
    )
}

export default Events
