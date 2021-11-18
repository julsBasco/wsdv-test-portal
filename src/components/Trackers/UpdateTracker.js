import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

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

const offset = -5.0;

const clientDate = new Date();
const utc = clientDate.getTime() + clientDate.getTimezoneOffset() * 60000;

const serverDate = new Date(utc + 3600000 * offset);

const date = serverDate.toLocaleDateString();
const time = serverDate.toLocaleTimeString();
const day = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];

export const UpdateTracker = async (username) => {
  // get data from db

  const userDoc = doc(db, "users", username);
  const getUserDoc = await getDoc(userDoc);
  const snapUserDoc = getUserDoc.data();
  let attendance = snapUserDoc.attendance;

  if (snapUserDoc.date === undefined) {
    if (attendance) {
      attendance += 1;
    } else {
      attendance = 1;
    }
  }
  if (snapUserDoc.date !== date) {
    if (attendance) {
      attendance += 1;
    } else {
      attendance = 1;
    }
  }

  // push data to db
  await updateDoc(userDoc, {
    date: date,
    time: time,
    day: day[serverDate.getDay()],
    attendance: attendance,
  });
};
