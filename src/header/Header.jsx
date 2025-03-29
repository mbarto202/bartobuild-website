import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import { auth, googleLogin, logout } from "../firebase";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      {/* Auth Buttons */}
      <div className="auth-buttons">
        <div className="desktop-buttons">
          {user ? (
            <>
              <button
                className="auth-btn"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </button>
              <button className="auth-btn" onClick={logout}>
                Logout ({user.displayName || "User"})
              </button>
            </>
          ) : (
            <button className="auth-btn" onClick={googleLogin}>
              Login
            </button>
          )}
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="mobile-menu">
            {user ? (
              <>
                <button
                  className="auth-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/dashboard");
                  }}
                >
                  Dashboard
                </button>
                <button
                  className="auth-btn"
                  onClick={() => {
                    setMenuOpen(false);
                    logout();
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="auth-btn"
                onClick={() => {
                  setMenuOpen(false);
                  googleLogin();
                }}
              >
                Login
              </button>
            )}
          </div>
        )}
      </div>

      {/* Title and Call to Action */}
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
