// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB1jl3SaCnc_aeRRDqE_Ejm0Ko2fb7vHh8",
  authDomain: "tytopets-backend.firebaseapp.com",
  projectId: "tytopets-backend",
  storageBucket: "tytopets-backend.firebasestorage.app",
  messagingSenderId: "550257349690",
  appId: "1:550257349690:web:242fcf1378ae38038f9103"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);