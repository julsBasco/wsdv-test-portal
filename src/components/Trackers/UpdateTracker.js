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

const updateAttendance = (attendance) => {};
export const UpdateTracker = async (username) => {
  // get data from db

  const userDoc = doc(db, "users", username);
  const getUserDoc = await getDoc(userDoc);
  const snapUserDoc = getUserDoc.data();
  var attendanceDB = snapUserDoc.attendance;

  if ((await snapUserDoc.date) === undefined) {
    await updateDoc(userDoc, {
      date: date,
      time: time,
      day: day[serverDate.getDay()],
      attendance: 1,
    });
  } else if ((await snapUserDoc.date) !== date) {
    await updateDoc(userDoc, {
      date: date,
      time: time,
      day: day[serverDate.getDay()],
      attendance: attendanceDB + 1,
    });
  }
};
