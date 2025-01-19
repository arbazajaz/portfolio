"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email, subject, message });
    // Replace with actual API call to send contact form data
    alert("Message sent successfully!");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section className="contact section container" id="contact">
      <div className="contact__container grid">
        {/* Contact Information */}
        <div className="contact__box">
          <h2 className="section__title">Get in Touch</h2>
          <p className="contact__description">
            Let’s discuss your project, collaborate, or answer any questions you
            may have. Reach out to me through the following methods or fill out
            the form below.
          </p>

          <div className="contact__data">
            <div className="contact__information">
              <h3 className="contact__subtitle">Call for quick support</h3>
              <span className="contact__description">
                <i className="ri-phone-line contact__icon"></i>
                +999 888 777
              </span>
            </div>

            <div className="contact__information">
              <h3 className="contact__subtitle">Email me</h3>
              <span className="contact__description">
                <i className="ri-mail-line contact__icon"></i>
                user@email.com
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact__form">
          <h3 className="contact__form-title">Send me a message</h3>
          <div className="contact__inputs">
            <div className="contact__content">
              <input
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__input"
                required
              />
              <label className="contact__label">Email</label>
            </div>

            <div className="contact__content">
              <input
                type="text"
                placeholder=" "
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="contact__input"
                required
              />
              <label className="contact__label">Subject</label>
            </div>

            <div className="contact__content contact__area">
              <textarea
                name="message"
                placeholder=" "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="contact__input"
                required
              ></textarea>
              <label className="contact__label">Message</label>
            </div>
          </div>

          <button type="submit" className="button button--flex">
            Send Message
            <i className="ri-arrow-right-up-line button__icon"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
