import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import { auth, googleLogin, logout } from "../firebase";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      {/* Auth Buttons & Mobile Menu */}
      <div className="auth-buttons">
        <div className="desktop-buttons">
          {user ? (
            <button className="auth-btn" onClick={logout}>
              Logout ({user.displayName || "User"})
            </button>
          ) : (
            <button className="auth-btn" onClick={googleLogin}>
              Login
            </button>
          )}
          {user && (
            <a href="/dashboard" className="auth-btn">
              Dashboard
            </a>
          )}
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {!user && (
              <button className="auth-btn" onClick={googleLogin}>
                Login
              </button>
            )}
            {user && (
              <>
                <a href="/dashboard" className="auth-btn">
                  Dashboard
                </a>
                <button className="auth-btn" onClick={logout}>
                  Logout
                </button>
              </>
            )}
          </div>
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
