// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5RMoAw9lOTSvvUsgpJmKgMNo_Zxv__iE",
  authDomain: "dusic-b8ae1.firebaseapp.com",
  projectId: "dusic-b8ae1",
  storageBucket: "dusic-b8ae1.firebasestorage.app",
  messagingSenderId: "877192828894",
  appId: "1:877192828894:web:a7dd7cd8ffbe5938f26f4f",
  measurementId: "G-QMHP68J04F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);