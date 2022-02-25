import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

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

export const PushToDbState = async (username) => {
  const user = username.toLowerCase();
  const docRef = doc(db, "users", user);
  const docSnap = await getDoc(docRef);
  const dataTest = docSnap.data();
  const date = new Date();

  if (dataTest === undefined) {
    await setDoc(doc(db, "users", user), {
      state: true,
    });
    return true;
  } else if (dataTest.state === false) {
    await updateDoc(doc(db, "users", user), {
      state: true,
    });
    return true;
  }
};
