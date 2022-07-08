// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjcN6v6tqCIjTY1tZkljd1SYaQL4hUUC4",
    authDomain: "ema-john-c7081.firebaseapp.com",
    projectId: "ema-john-c7081",
    storageBucket: "ema-john-c7081.appspot.com",
    messagingSenderId: "346789700730",
    appId: "1:346789700730:web:dd12975c7361c00c0107c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;