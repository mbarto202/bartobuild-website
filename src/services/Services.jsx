import React, { useEffect, useState } from "react";
import "./services.css";
import { FaDumbbell, FaCalendarAlt, FaRegHandshake } from "react-icons/fa";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Services = () => {
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
  }, []);

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBooking = async (link) => {
    if (user) {
      window.location.href = link;
    } else {
      try {
        await signInWithPopup(auth, provider);
        if (auth.currentUser) {
          window.location.href = link;
        }
      } catch (error) {
        console.error("Login Error:", error);
      }
    }
  };

  return (
    <section
      id="services"
      className={`services-section ${isVisible ? "show" : ""}`}
    >
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
          <button
            onClick={() => handleBooking("https://calendly.com/your-link")}
            className="btn btn-primary"
          >
            Book a Session
          </button>
        </div>

        <div className="service-item">
          <FaCalendarAlt className="service-icon" />
          <h3 className="service-title">Premium Monthly Coaching</h3>
          <p className="service-description">
            Fully commit to your fitness journey with weekly in-person training
            sessions, tailored workouts, Zoom check-ins, and nutritional
            guidance.
          </p>
          <button
            onClick={() =>
              handleBooking("https://calendly.com/your-link-premium")
            }
            className="btn btn-primary"
          >
            Start Coaching
          </button>
        </div>

        <div className="service-item">
          <FaRegHandshake className="service-icon" />
          <h3 className="service-title">Free Consultation</h3>
          <p className="service-description">
            A 30-minute introductory session to discuss your goals, fitness
            history, and expectations.
          </p>
          <button
            onClick={() => handleBooking("https://calendly.com/your-link")}
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
