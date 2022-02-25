import React, { useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

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

const DbContext = React.createContext();

export function useDb() {
  return useContext(DbContext);
}

export function DbProvider({ children }) {
  const [active, setActive] = useState(false);

  const userData = async (username) => {
    const user = username.toLowerCase();
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);
    const userData = docSnap.data();

    return userData;
  };

  const updateUserData = async (data, username) => {
    const user = username.toLowerCase();
    const docRef = doc(db, "users", user);
    const docSnap = await getDoc(docRef);

    try {
      await updateDoc(doc(db, "users", user), data);
      return "successfully updated";
    } catch {
      console.error("something weird happend");
    }
  };

  const toggleUpdateModal = () => setActive(!active);

  const value = { active, toggleUpdateModal, updateUserData, userData };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}
