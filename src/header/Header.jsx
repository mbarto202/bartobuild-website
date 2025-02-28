import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import {
  auth,
  provider,
  signInWithCredential,
  authenticateWithPasskey,
} from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleFaceIDLogin = async () => {
    try {
      const credential = await authenticateWithPasskey();
      if (credential) {
        console.log("Face ID Login Successful:", credential);
      } else {
        console.error("Face ID Login Failed");
      }
    } catch (error) {
      console.error("Face ID Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <header>
      <div className="auth-buttons">
        {user ? (
          <button className="auth-btn" onClick={handleLogout}>
            Logout ({user.displayName || "User"})
          </button>
        ) : (
          <>
            <button className="auth-btn" onClick={handleGoogleLogin}>
              Login with Google
            </button>
            <button className="auth-btn" onClick={handleFaceIDLogin}>
              Login with Face ID
            </button>
          </>
        )}
      </div>

      <div className="container header_container">
        <div className="titleBg">
          <h1 className="name">Michael Barto</h1>
          <h5 className="title">Your Personal Fitness Coach</h5>
          <a
            className="btn btn-primary"
            href="https://calendly.com/michael-d-barto/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Call
          </a>
        </div>
        <HeaderSocial />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
