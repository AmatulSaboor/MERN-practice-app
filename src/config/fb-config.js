// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa8At8yqZb5esFWk5pBHSZFQoz3lLiCsM",
  authDomain: "firstfirebase-d5ab7.firebaseapp.com",
  projectId: "firstfirebase-d5ab7",
  storageBucket: "firstfirebase-d5ab7.appspot.com",
  messagingSenderId: "464039902989",
  appId: "1:464039902989:web:303cf448d88b031f65ba44",
  measurementId: "G-3PRJDH4S8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);