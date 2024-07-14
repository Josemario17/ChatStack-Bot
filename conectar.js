import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
 
const conectGemini = "AIzaSyAdeu0VtpMaTO7Q4TTEkig2nwsCaSP5o34";

const firebaseConfig = {
  apiKey: "AIzaSyD4oykV_NMd_cVBQObf4d4LSrAV-n4v440",
  authDomain: "tickets-1c045.firebaseapp.com",
  projectId: "tickets-1c045",
  storageBucket: "tickets-1c045.appspot.com",
  messagingSenderId: "619756641576",
  appId: "1:619756641576:web:740c00ff522d2e7b64c41d",
  measurementId: "G-9BFXXNR996",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)

export { conectGemini, db, auth };
