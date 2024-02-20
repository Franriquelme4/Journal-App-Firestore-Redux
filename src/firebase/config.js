// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBwoNQIHrkkhFP1r1A23mA4nGPlx9hq4M0",
  authDomain: "react-cursos-1e9cf.firebaseapp.com",
  projectId: "react-cursos-1e9cf",
  storageBucket: "react-cursos-1e9cf.appspot.com",
  messagingSenderId: "860304281728",
  appId: "1:860304281728:web:8400d5c7389e94df711665"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);