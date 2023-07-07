// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
apiKey: "AIzaSyBx1f7lmdlDdqhM8eP5BeDSOwJ0pTVNoaQ",
authDomain: "blogapplication-d2e4e.firebaseapp.com",
projectId: "blogapplication-d2e4e",
storageBucket: "blogapplication-d2e4e.appspot.com",
messagingSenderId: "11800389790",
appId: "1:11800389790:web:b40089015d20294b15338f",
measurementId: "G-LL1PWFVVJV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

export { auth, provider, facebookProvider, db };