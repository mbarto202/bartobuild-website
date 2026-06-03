import React, { useState, useEffect } from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocials";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      {/* Auth Buttons */}
      <div className="auth-buttons">
        <button className="auth-btn" onClick={() => navigate("/dashboard")}>
          Client Portal
        </button>
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
