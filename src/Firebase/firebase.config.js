// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVKJ0m8ZcYD8plYL9z_pNuIN81mT9r14o",
  authDomain: "ema-john-with-firebase-a-7a3b1.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-7a3b1",
  storageBucket: "ema-john-with-firebase-a-7a3b1.appspot.com",
  messagingSenderId: "645439680588",
  appId: "1:645439680588:web:87c94aae9799b65b2f44e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;