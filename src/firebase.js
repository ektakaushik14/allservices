// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFo9pEH0i7qcIDEMtPy9R8UyrKay1Javo",
  authDomain: "ai-services-357c9.firebaseapp.com",
  projectId: "ai-services-357c9",
  storageBucket: "ai-services-357c9.appspot.com",
  messagingSenderId: "604132354318",
  appId: "1:604132354318:web:ef9e8c23527387e1ffcf5f",
  measurementId: "G-L9B5CHQD3F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const analytics = getAnalytics(app);
