// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb8QBa3FYfwHYqUQkssS16JDBYCCOJEZo",
  authDomain: "pfynance.firebaseapp.com",
  projectId: "pfynance",
  storageBucket: "pfynance.appspot.com",
  messagingSenderId: "1436660229",
  appId: "1:1436660229:web:4829c759cc19e9c61e626c",
  measurementId: "G-3K1CZTH3XS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider, db, doc, setDoc };