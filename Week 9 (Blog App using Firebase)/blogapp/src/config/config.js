// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {

};

// Initialize Firebase
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { auth, provider };