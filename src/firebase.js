// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVxjm1na_V5idpUB3EYLL8s_ZsgWZPP0LQ",
  authDomain: "mood-journal-74289.firebaseapp.com",
  projectId: "mood-journal-74289",
  storageBucket: "mood-journal-74289.appspot.com",
  messagingSenderId: "421161125849",
  appId: "1:421161125849:web:08415bfab24d58944afbcb",
  measurementId: "G-DEHCHQGMJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export authentication instance
export const auth = getAuth(app);
