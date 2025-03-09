import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import {
  auth,
  googleLogin,
  logout,
  authenticateWithPasskey,
} from "../firebase";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  const handleBooking = async () => {
    if (user) {
      window.location.href = "https://calendly.com/michael-d-barto/30min";
    } else {
      await googleLogin();
    }
  };

  return (
    <header>
      <div className="auth-buttons">
        {user ? (
          <>
            <button className="auth-btn" onClick={logout}>
              Logout ({user.displayName || "User"})
            </button>
          </>
        ) : (
          <>
            <button className="auth-btn" onClick={googleLogin}>
              Login with Google
            </button>
          </>
        )}
      </div>

      <div className="container header_container">
        <div className="titleBg">
          <h1 className="name">Michael Barto</h1>
          <h5 className="title">Your Personal Fitness Coach</h5>
          <button className="btn btn-primary" onClick={handleBooking}>
            Book a Call
          </button>
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
