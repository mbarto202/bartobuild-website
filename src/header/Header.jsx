import React, { useState } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../assets/BBlogonobb.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goToClientPortal = () => {
    setMenuOpen(false);
    navigate("/client-portal");
  };

  return (
    <header>
      <div className="top-bar">
        <a href="#">
          <img src={HeaderLogo} alt="BartoBuild" className="header-logo" />
        </a>

        <div className="desktop-buttons">
          <button className="auth-btn" onClick={goToClientPortal}>
            Client Portal
          </button>
        </div>
        <div className="auth-buttons">
          <div
            className="hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              <button className="auth-btn" onClick={goToClientPortal}>
                Client Portal
              </button>
            </div>
          )}
        </div>
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
        <a href="#services" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
