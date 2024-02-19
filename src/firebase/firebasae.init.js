// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKZ7ABwIokdYPBFuT0x44CVOfsRF-Qpiw",
  authDomain: "fir-projects-c9234.firebaseapp.com",
  projectId: "fir-projects-c9234",
  storageBucket: "fir-projects-c9234.appspot.com",
  messagingSenderId: "876430042635",
  appId: "1:876430042635:web:1b50075d0394a22b8b890e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
