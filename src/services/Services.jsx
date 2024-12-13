import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Services</h2>
      <p className="services-intro">
        At BartoBuild, I offer a variety of services tailored to your fitness
        goals. Whether you're looking to build muscle, lose weight, or achieve
        overall wellness, I've got you covered.
      </p>
      <div className="services-container">
        <div className="service-item">
          <h3 className="service-title">Personal Training</h3>
          <p className="service-description">
            One-on-one coaching sessions designed to maximize your potential.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Custom Workout Plans</h3>
          <p className="service-description">
            A personalized workout program to suit your unique fitness level and
            schedule.
          </p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Nutrition Guidance</h3>
          <p className="service-description">
            Expert advice on meal planning and nutrition to fuel your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
