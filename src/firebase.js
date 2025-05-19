import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { Passkeys } from "passkeys-js";

const firebaseConfig = {
  apiKey: "AIzaSyDQ1rdWhPN7GQtjzmU-n-nVv8SWPdVPp1o",
  authDomain: "bartobuild-auth.firebaseapp.com",
  projectId: "bartobuild-auth",
  storageBucket: "bartobuild-auth.appspot.com",
  messagingSenderId: "322355536724",
  appId: "1:322355536724:web:87f201a781f82d0253dec1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/**
 * Google Login
 */
const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Google Login Successful:", result.user);

    // Automatically register Passkey after first login
    await registerWithPasskey();
  } catch (error) {
    console.error("Google Login Error:", error);
  }
};

/**
 * Logout
 */
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User Logged Out");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

/**
 * Register Face ID (Passkey)
 * Called after first login to enable Passkey for future logins.
 */
const registerWithPasskey = async () => {
  try {
    const credential = await Passkeys.register({
      rpId: "bartobuild-website.vercel.app",
      user: {
        id: auth.currentUser?.uid || "guest",
        name: auth.currentUser?.displayName || "Guest User",
      },
    });

    if (!credential) {
      console.error("No credential received from Passkey registration.");
      return null;
    }

    console.log("Passkey Registered:", credential);

    // Store Passkey credential in Firebase Authentication
    const firebaseCredential = EmailAuthProvider.credential(
      credential.id,
      credential.rawId
    );
    await signInWithCredential(auth, firebaseCredential);

    console.log("Face ID Linked to Firebase Account");
    return credential;
  } catch (error) {
    console.error("Passkey Registration Failed:", error);
    return null;
  }
};

/**
 * Authenticate with Face ID (Passkey)
 * Used for logging in without Google.
 */
const authenticateWithPasskey = async () => {
  try {
    const credential = await Passkeys.authenticate();
    console.log("✅ Passkey Authentication Successful:", credential);

    // Sign into Firebase using the Passkey
    const firebaseCredential = EmailAuthProvider.credential(
      credential.id,
      credential.rawId
    );
    await signInWithCredential(auth, firebaseCredential);

    console.log("User Logged in with Face ID!");
  } catch (error) {
    console.error("Face ID Login Failed:", error);
  }
};

export {
  auth,
  provider,
  googleLogin,
  logout,
  registerWithPasskey,
  authenticateWithPasskey,
};
