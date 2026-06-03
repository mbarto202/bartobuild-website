import React, { useEffect, useState } from "react";
import "./about.css";
import sidechest from "../assets/sidechest.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section.getBoundingClientRect().top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className={`about-section ${isVisible ? "show" : ""}`}>
      <div className="about-content">
        <img src={sidechest} alt="Michael Barto" className="about-image" />
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p>
            Welcome! I'm Michael, a NASM Certified Personal Trainer and natural
            bodybuilder passionate about helping clients improve their health
            and achieve their dream physique.
          </p>
          <a href="#services" className="about-btn">
            Learn More <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
