// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

// TODO: Add your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqNY0mjtwRZN8G8toYAi-zJ1T-qQfgyEQ",
  authDomain: "teste-andlias.firebaseapp.com",
  databaseURL: "https://teste-andlias.firebaseio.com",
  projectId: "teste-andlias",
  storageBucket: "teste-andlias.firebasestorage.app",
  messagingSenderId: "859482306510",
  appId: "1:859482306510:web:a2599c49c87ec452c99d9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export const sendContactEmail = httpsCallable(functions, 'sendContactEmail');
