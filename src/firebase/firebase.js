// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Xfzc8kwj4XxeUktYLJL93EI2hf8-mFc",
  authDomain: "c-app-b3b8b.firebaseapp.com",
  projectId: "c-app-b3b8b",
  storageBucket: "c-app-b3b8b.firebasestorage.app",
  messagingSenderId: "708739752679",
  appId: "1:708739752679:web:6684178f5496b800107842"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth,signInWithEmailAndPassword}