import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome! I’m Michael Barto, a fitness coach passionate about helping
            you achieve your dream physique. With years of experience in
            bodybuilding and personal training, I specialize in personalized
            fitness plans tailored to your goals.
          </p>
          <a href="#services" className="btn btn-primary">
            Start Your Fitness Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
