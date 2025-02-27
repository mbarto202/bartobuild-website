import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const isFaceIDAvailable = () =>
  window.PublicKeyCredential &&
  navigator.credentials &&
  typeof navigator.credentials.create === "function";

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
      console.error("Login Error:", error);
    }
  };

  const handleFaceIDLogin = async () => {
    if (!isFaceIDAvailable()) {
      alert("Face ID is not supported on this device.");
      return;
    }

    try {
      const credential = await navigator.credentials.get({
        publicKey: {
          challenge: new Uint8Array(32),
          rp: { name: "BartoBuild" },
          user: { id: new Uint8Array(16), name: "User", displayName: "User" },
          pubKeyCredParams: [{ alg: -7, type: "public-key" }],
        },
      });

      if (credential) {
        alert("Face ID authentication successful!");
        // Handle Firebase Custom Auth logic here
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
            Logged in as {user.displayName || "User"} (Logout)
          </button>
        ) : (
          <>
            <button className="auth-btn" onClick={handleGoogleLogin}>
              Login with Google
            </button>
            {isFaceIDAvailable() && (
              <button className="auth-btn" onClick={handleFaceIDLogin}>
                Login with Face ID
              </button>
            )}
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
