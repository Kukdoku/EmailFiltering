// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqIS2zLxVE1iVnoqLHcM-G-8pxT20YMkw",
  authDomain: "email-filter-53faf.firebaseapp.com",
  projectId: "email-filter-53faf",
  storageBucket: "email-filter-53faf.appspot.com",
  messagingSenderId: "892167484271",
  appId: "1:892167484271:web:ad313c1e4389580fa1ee9a",
  measurementId: "G-B5RCHJBRYZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
