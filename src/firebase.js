import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { register, authenticate } from "passkeys-js";

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

const registerWithPasskey = async () => {
  try {
    const credential = await register();
    return credential; // Save this credential for authentication
  } catch (error) {
    console.error("Passkey Registration Error:", error);
    return null;
  }
};

//Authenticate user with Passkeys (Face ID)
const authenticateWithPasskey = async () => {
  try {
    const credential = await authenticate();
    const firebaseCredential = EmailAuthProvider.credential(
      credential.id,
      credential.rawId
    );
    return signInWithCredential(auth, firebaseCredential);
  } catch (error) {
    console.error("Passkey Authentication Error:", error);
    return null;
  }
};

export {
  auth,
  provider,
  signInWithCredential,
  registerWithPasskey,
  authenticateWithPasskey,
};
