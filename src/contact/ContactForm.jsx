import { useState, useEffect } from "react";
import { auth } from "../firebase";
import "./ContactForm.css";

const ContactForm = () => {
  const [user, setUser] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Auto-fill email if logged in
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setFormData((prev) => ({
          ...prev,
          email: authUser.email,
        }));
      } else {
        setUser(null);
        setFormData((prev) => ({ ...prev, email: "" }));
      }
    });
    return () => unsubscribe();
  }, []);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message Sent:", formData);
    alert("Message Sent!");

    setFormData({ name: "", email: user ? user.email : "", message: "" });
  };

  return (
    <section
      id="contact"
      className={`contact-section ${isVisible ? "show" : ""}`}
    >
      <h2 className="section-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={!!user}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
