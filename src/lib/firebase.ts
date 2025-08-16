import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6ZzWUMwn4B1wkH_-KUt5l7B804ruVwzU",
  authDomain: "inflowcash.firebaseapp.com",
  projectId: "inflowcash",
  storageBucket: "inflowcash.firebasestorage.app",
  messagingSenderId: "62431480699",
  appId: "1:62431480699:web:e21ca93f4ae52733260bde"
};


// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, db, functions, googleProvider };
