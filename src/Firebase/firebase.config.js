// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxwIQPYzG78izAn0mIwLp5ByRb8S3G-fw",
  authDomain: "travel-guru-c6363.firebaseapp.com",
  projectId: "travel-guru-c6363",
  storageBucket: "travel-guru-c6363.firebasestorage.app",
  messagingSenderId: "699179742059",
  appId: "1:699179742059:web:b0adab61a33be0535b922e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);