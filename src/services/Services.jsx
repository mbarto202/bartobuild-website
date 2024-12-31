import React from "react";
import "./services.css";
import { FaDumbbell, FaCalendarAlt, FaRegHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Services</h2>
      <p className="services-intro">
        At BartoBuild, I offer services tailored to your fitness journey.
        Whether you're aiming to build muscle, lose weight, or simply get
        started, I'm here to guide you.
      </p>
      <div className="services-container">
        <div className="service-item">
          <FaDumbbell className="service-icon" />
          <h3 className="service-title">One-on-One Coaching</h3>
          <p className="service-description">
            Personalized 60-minute sessions, only available in-person, focusing
            on bodybuilding or weight loss.
          </p>
        </div>
        <div className="service-item">
          <FaCalendarAlt className="service-icon" />
          <h3 className="service-title">Premium Monthly Coaching</h3>
          <p className="service-description">
            Fully commit to your fitness journey with weekly in-person training
            sessions, tailored workouts, Zoom check-ins, and nutritional
            guidance. This plan is designed for those ready to achieve lasting
            results.
          </p>
        </div>

        <div className="service-item">
          <FaRegHandshake className="service-icon" />
          <h3 className="service-title">Free Consultation</h3>
          <p className="service-description">
            A 30-minute introductory session to discuss your goals, fitness
            history, and expectations.
          </p>
          <a href="https://calendly.com/your-link" className="btn btn-primary">
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
