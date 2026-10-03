import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzha2ojInopcNd4ihnymsKPeH0axkZrqQ",
  authDomain: "company-5610b.firebaseapp.com",
  projectId: "company-5610b",
  storageBucket: "company-5610b.firebasestorage.app",
  messagingSenderId: "644903565128",
  appId: "1:644903565128:web:f8601c74845b20aa04e57d",
  measurementId: "G-21VLHM80K7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

