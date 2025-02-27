import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQ1rdWhPN7GQtjzmU-n-nVv8SWPdVPp1o",
  authDomain: "bartobuild-auth.firebaseapp.com",
  projectId: "bartobuild-auth",
  storageBucket: "bartobuild-auth.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithCredential };
