import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footerLogo">
        Michael Barto
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
      </ul>

      <div className="footer-contact">
        <a href="tel:3025551234">(302) 555-1234</a>

        <a href="mailto:michael@bartobuild.com">michael@bartobuild.com</a>
      </div>

      <div className="footerSocials">
        <a href="https://www.instagram.com/mbarto11/">
          <RiInstagramFill />
        </a>
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
      </div>

      <div className="footerCopyright">
        <small>
          &copy; {new Date().getFullYear()} Michael Barto. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
