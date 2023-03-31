import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC9V-Yj_iShlElixJRr_5szqk415ZZYjSA",
  authDomain: "email-login-dffd1.firebaseapp.com",
  projectId: "email-login-dffd1",
  storageBucket: "email-login-dffd1.appspot.com",
  messagingSenderId: "437578891769",
  appId: "1:437578891769:web:ef7fcc0d062932a1bcfd28",
  measurementId: "G-26HV46EWDE"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore()