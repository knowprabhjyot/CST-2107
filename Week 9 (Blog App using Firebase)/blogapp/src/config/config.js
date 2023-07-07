// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

export { auth, provider, facebookProvider, db };