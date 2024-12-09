import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Services</h2>
      <div className="services-container">
        <div className="service-item">
          <h3 className="service-title">Personal Training</h3>
          <p className="service-description">
            Tailored one-on-one fitness coaching to help you achieve your goals.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Custom Workout Plans</h3>
          <p className="service-description">
            Personalized workout routines designed to fit your schedule and
            fitness level.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Nutrition Guidance</h3>
          <p className="service-description">
            Expert advice on diet and meal planning to complement your fitness
            journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
