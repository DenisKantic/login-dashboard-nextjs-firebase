// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbn_J9BGJI76YF9fEzWwae_2dOiEcwHXY",
  authDomain: "mini-blog-6e247.firebaseapp.com",
  projectId: "mini-blog-6e247",
  storageBucket: "mini-blog-6e247.appspot.com",
  messagingSenderId: "655424365167",
  appId: "1:655424365167:web:7b13801af071f06313639a",
  measurementId: "G-X3QNRC0NE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;