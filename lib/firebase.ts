// lib/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAgXWeF5vRSZsxs-35wmVgaoRMbkOwXbBQ",
  authDomain: "soliventa.firebaseapp.com",
  projectId: "soliventa",
  storageBucket: "soliventa.firebasestorage.app",
  messagingSenderId: "397646360116",
  appId: "1:397646360116:web:7a1dfcc3a2f2e4b59b6461",
  measurementId: "G-3DMMZ0CZ7D"
}

// Empêche Firebase d'être réinitialisé à chaque appel
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)

// Authentification Firebase
export const auth = getAuth(app)
export const db = getFirestore(app) 
