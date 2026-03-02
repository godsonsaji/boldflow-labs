import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase config values
const firebaseConfig = {
    apiKey: "AIzaSyAgwkK4_FQY7z4QKg-uybQMg_Hrn-jjrS4",
    authDomain: "boldflow-labs.firebaseapp.com",
    projectId: "boldflow-labs",
    storageBucket: "boldflow-labs.firebasestorage.app",
    messagingSenderId: "746915827273",
    appId: "1:746915827273:web:22800682ff19ca7a4f7998",
    measurementId: "G-JJQ1MR3VRM"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
