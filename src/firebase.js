import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Passkeys } from "passkeys-js";

const firebaseConfig = {
  apiKey: "AIzaSyDQ1rdWhPN7GQtjzmU-n-nVv8SWPdVPp1o",
  authDomain: "bartobuild-auth.firebaseapp.com",
  projectId: "bartobuild-auth",
  storageBucket: "bartobuild-auth.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase & Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const passkeys = new Passkeys();

// Google Sign-in Function
const googleLogin = async () => {
  try {
    await signInWithPopup(auth, provider);
    console.log("✅ Google Login Successful");
  } catch (error) {
    console.error("❌ Google Login Error:", error);
  }
};

// Logout Function
const logout = async () => {
  try {
    await signOut(auth);
    console.log("✅ User Logged Out");
  } catch (error) {
    console.error("❌ Logout Error:", error);
  }
};

// Register Face ID / Passkey
const registerWithPasskey = async () => {
  try {
    const credential = await passkeys.register();
    console.log("✅ Passkey registered:", credential);
    return credential;
  } catch (error) {
    console.error("❌ Passkey registration failed:", error);
    return null;
  }
};

// Authenticate Face ID / Passkey
const authenticateWithPasskey = async () => {
  try {
    const credential = await passkeys.authenticate();
    console.log("✅ Passkey authentication successful:", credential);
    return credential;
  } catch (error) {
    console.error("❌ Passkey authentication failed:", error);
    return null;
  }
};

// Export Functions
export {
  auth,
  provider,
  googleLogin,
  logout,
  registerWithPasskey,
  authenticateWithPasskey,
};
