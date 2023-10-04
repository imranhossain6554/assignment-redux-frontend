// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIr5P9HvaJZaW4EuE-gxjpPfOdpFDCvtg",
  authDomain: "book-catalog-app-e75ed.firebaseapp.com",
  projectId: "book-catalog-app-e75ed",
  storageBucket: "book-catalog-app-e75ed.appspot.com",
  messagingSenderId: "1093330142531",
  appId: "1:1093330142531:web:c10f3a35b8fd45a9a09bf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
