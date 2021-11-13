import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc, setDoc} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD_HKFcESvPZ2v6oPaMSVPAtGhvCGS3bWc",

    authDomain: "wsdv-development.firebaseapp.com",
  
    projectId: "wsdv-development",
  
    storageBucket: "wsdv-development.appspot.com",
  
    messagingSenderId: "978428886119",
  
    appId: "1:978428886119:web:3d7247572fba40344628c2"
}

const app = initializeApp(firebaseConfig);
        
const db = getFirestore(app);


export const LoginChecker = async (username) => {
    
    const docRef = doc(db, 'users', username)
    const docSnap = await getDoc(docRef)
    const dataTest = docSnap.data()
    const date = new Date()

    return dataTest.state
}
        

