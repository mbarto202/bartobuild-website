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
          <h3 className="service-title">Single Training Session</h3>
          <p className="service-description">
            A one on one in person training session focused on proper form,
            strength development, hypertrophy, fat loss, and building confidence
            in the gym.
          </p>
          <p className="service-price single-session-price">$45 / session</p>
        </div>

        <div className="service-item">
          <FaCalendarAlt className="service-icon" />
          <h3 className="service-title">Monthly Training Commitment</h3>
          <p className="service-description">
            A monthly commitment that includes two in person training sessions
            each week, nutrition guidance, and a personalized plan to help you
            stay consistent and make progress.
          </p>
          <p className="service-price">$320 / month</p>
          <span className="service-note">Includes 8 sessions per month</span>
        </div>

        <div className="service-item">
          <FaRegHandshake className="service-icon" />
          <h3 className="service-title">Free Consultation</h3>
          <p className="service-description">
            A quick intro call to talk through your goals, training history,
            schedule, and decide which option makes the most sense for you.
          </p>
          <button
            onClick={() =>
              openBookingLink("https://calendly.com/michael-d-barto/30min")
            }
            className="btn btn-primary consultation-button"
          >
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
