// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI9YCHSmqgifBCWdX9tP91dAaJ-fikJBE",
  authDomain: "sayna-reactjs-superman-c0d87.firebaseapp.com",
  projectId: "sayna-reactjs-superman-c0d87",
  storageBucket: "sayna-reactjs-superman-c0d87.appspot.com",
  messagingSenderId: "597259576185",
  appId: "1:597259576185:web:e668156e963f0f518645a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db , storage , auth};