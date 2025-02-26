import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for auth changes
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  const handleBooking = async (link) => {
    if (user) {
      window.location.href = link;
    } else {
      try {
        await signInWithPopup(auth, provider);
        if (auth.currentUser) {
          window.location.href = link;
        }
      } catch (error) {
        console.error("Login Error:", error);
      }
    }
  };

  return (
    <header>
      {/* Auth Button in Top Right */}
      <div className="auth-buttons">
        {user ? (
          <button className="auth-btn" onClick={handleLogout}>
            Logged in as {user.displayName || "User"} (Logout)
          </button>
        ) : (
          <button className="auth-btn" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>

      <div className="container header_container">
        <div className="titleBg">
          <h1 className="name">Michael Barto</h1>
          <h5 className="title">Your Personal Fitness Coach</h5>
          <a
            onClick={() =>
              handleBooking("https://calendly.com/michael-d-barto/30min")
            }
            className="btn btn-primary"
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
