// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8BY429znbz430ZQ_DcX4_W3Ggcramwjs",
  authDomain: "companydb-f6f3e.firebaseapp.com",
  projectId: "companydb-f6f3e",
  storageBucket: "companydb-f6f3e.appspot.com",
  messagingSenderId: "401521516627",
  appId: "1:401521516627:web:fa5013e1e82f1b5ed4e6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);