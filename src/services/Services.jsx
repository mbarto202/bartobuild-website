import React, { useEffect, useState } from "react";
import "./services.css";
import { FaDumbbell, FaCalendarAlt, FaRegHandshake } from "react-icons/fa";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");

      if (
        section &&
        section.getBoundingClientRect().top < window.innerHeight * 0.75
      ) {
        setIsVisible(true);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openBookingLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="services"
      className={`services-section ${isVisible ? "show" : ""}`}
    >
      <h2 className="section-title">Services</h2>

      <p className="services-intro">
        I offer fitness services tailored to your goals. Whether you want to
        build muscle, lose weight, or simply get started, I'm here to guide you.
      </p>

      <div className="services-container">
        <div className="service-item">
          <FaDumbbell className="service-icon" />
          <h3 className="service-title">One-on-One Training</h3>
          <p className="service-description">
            In-person training sessions built around proper form, progressive
            overload, muscle building, fat loss, and long-term consistency.
          </p>
          <button
            onClick={() => openBookingLink("https://calendly.com/your-link")}
            className="btn btn-primary"
          >
            Book a Session
          </button>
        </div>

        <div className="service-item">
          <FaCalendarAlt className="service-icon" />
          <h3 className="service-title">Monthly Coaching</h3>
          <p className="service-description">
            A structured coaching option for clients who want weekly training,
            accountability, goal tracking, and simple nutrition guidance.
          </p>
          <button
            onClick={() => openBookingLink("https://calendly.com/your-link")}
            className="btn btn-primary"
          >
            Start Coaching
          </button>
        </div>

        <div className="service-item">
          <FaRegHandshake className="service-icon" />
          <h3 className="service-title">Free Consultation</h3>
          <p className="service-description">
            A quick intro call to talk through your goals, training history,
            schedule, and whether BartoBuild is the right fit for you.
          </p>
          <button
            onClick={() => openBookingLink("https://calendly.com/your-link")}
            className="btn btn-primary"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
