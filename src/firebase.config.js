import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-G1z8H-FVDP28UxsGB3U8y8DKEQ_pnxI",
  authDomain: "maltimart-8f9ab.firebaseapp.com",
  projectId: "maltimart-8f9ab",
  storageBucket: "maltimart-8f9ab.appspot.com",
  messagingSenderId: "1091030027214",
  appId: "1:1091030027214:web:0ef28e52645ed5a0b6f99f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
