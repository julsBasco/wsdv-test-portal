import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

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

export const ToLogoutSession = async (username) => {
  const date = new Date();

  await updateDoc(doc(db, "users", username), {
    state: false,
  });
};
