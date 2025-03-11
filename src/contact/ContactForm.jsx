import { useState } from "react";
import { auth } from "../firebase";
import "./ContactForm.css";

const ContactForm = () => {
  const user = auth.currentUser;

  const [formData, setFormData] = useState({
    name: "",
    email: user ? user.email : "", // Auto-fill email if logged in
    message: "",
  });

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
    <section className="contact-section">
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
          disabled={user}
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
