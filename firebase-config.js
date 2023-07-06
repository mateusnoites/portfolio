import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmVBwvqSsLqA49qSIEvXjOYeQZHNX-214",
  authDomain: "portfolio-mattnoites.firebaseapp.com",
  projectId: "portfolio-mattnoites",
  storageBucket: "portfolio-mattnoites.appspot.com",
  messagingSenderId: "549794886451",
  appId: "1:549794886451:web:635c934994975d963f0446",
  measurementId: "G-C4MSY82B6K"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);