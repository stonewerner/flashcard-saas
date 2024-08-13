// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvmgrulVK0Nigizk6sjwY71iEHzK1wpfA",
  authDomain: "flashcard-saas-948da.firebaseapp.com",
  projectId: "flashcard-saas-948da",
  storageBucket: "flashcard-saas-948da.appspot.com",
  messagingSenderId: "554219829451",
  appId: "1:554219829451:web:cbefcb6f76ac46d071834e",
  measurementId: "G-SD1L2P5MZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);