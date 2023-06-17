// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm2Tag5IICTRtdc_zTci1z0MoeGREpRDU",
  authDomain: "proyecto-app-32247.firebaseapp.com",
  projectId: "proyecto-app-32247",
  storageBucket: "proyecto-app-32247.appspot.com",
  messagingSenderId: "251398376313",
  appId: "1:251398376313:web:37f86e6e5c35bea626bda8"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);