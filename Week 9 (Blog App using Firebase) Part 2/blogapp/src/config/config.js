// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBx1f7lmdlDdqhM8eP5BeDSOwJ0pTVNoaQ",
  authDomain: "blogapplication-d2e4e.firebaseapp.com",
  projectId: "blogapplication-d2e4e",
  storageBucket: "blogapplication-d2e4e.appspot.com",
  messagingSenderId: "11800389790",
  appId: "1:11800389790:web:b40089015d20294b15338f",
  measurementId: "G-LL1PWFVVJV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const emailProvider = new EmailAuthProvider();

const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, googleProvider, emailProvider, db, storage };
