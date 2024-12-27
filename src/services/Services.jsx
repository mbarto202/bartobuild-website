import React from "react";
import "./services.css";
import { FaDumbbell, FaCalendarAlt, FaComments } from "react-icons/fa";

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
            Personalized 60-minute sessions, available in-person or via Zoom,
            focusing on bodybuilding or weight loss.
          </p>
        </div>
        <div className="service-item">
          <FaCalendarAlt className="service-icon" />
          <h3 className="service-title">Monthly Coaching</h3>
          <p className="service-description">
            Commit to a month of weekly training sessions and calls, providing
            continuous support and progress tracking.
          </p>
        </div>
        <div className="service-item">
          <FaComments className="service-icon" />
          <h3 className="service-title">Free Consultation</h3>
          <p className="service-description">
            Book a free consultation to discuss your fitness goals and how I can
            help you achieve them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
