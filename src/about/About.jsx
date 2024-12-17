import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <img
          src="/path-to-your-image.jpg"
          alt="Michael Barto"
          className="about-image"
        />
        <div className="about-text">
          <h2>Meet Your Coach</h2>
          <p>
            Welcome! I’m Michael Barto, a fitness coach passionate about helping
            you achieve your dream physique. With years of experience in
            bodybuilding and personal training, I specialize in creating
            personalized fitness plans tailored to your goals. Let’s build the
            best version of you—one step at a time!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
