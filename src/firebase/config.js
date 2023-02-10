// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCFUQbLlJCVgcWSav0oe7FjMymnUQ9ls9U",
    authDomain: "bestfruitshop-22077.firebaseapp.com",
    projectId: "bestfruitshop-22077",
    storageBucket: "bestfruitshop-22077.appspot.com",
    messagingSenderId: "490084982336",
    appId: "1:490084982336:web:b5dac7edddebc2865609a5",
    measurementId: "G-PMNGG3VPF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
