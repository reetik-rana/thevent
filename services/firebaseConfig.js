// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Import getFirestore
// import { getAnalytics } from "firebase/analytics"; // You can keep this if you use analytics

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsaLlNvg1nbsoG6l6cNHtul3xI4U4Qn5k",
  authDomain: "thevent-95973.firebaseapp.com",
  projectId: "thevent-95973",
  storageBucket: "thevent-95973.firebasestorage.app",
  messagingSenderId: "419817763725",
  appId: "1:419817763725:web:c4749a7edc04c513d543c4",
  measurementId: "G-WFXL2N0KD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);

// const analytics = getAnalytics(app); // Keep this if you need analytics

