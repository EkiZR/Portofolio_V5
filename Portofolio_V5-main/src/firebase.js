import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-lfUt1adpQ0KYcFFW_oAWTJVfHDOOZy8",
  authDomain: "portofolio-web-3e8e8.firebaseapp.com",
  databaseURL: "https://portofolio-web-3e8e8-default-rtdb.firebaseio.com",
  projectId: "portofolio-web-3e8e8",
  storageBucket: "portofolio-web-3e8e8.firebasestorage.app",
  messagingSenderId: "25195509306",
  appId: "1:25195509306:web:2b635dcf997137bf612703"
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };