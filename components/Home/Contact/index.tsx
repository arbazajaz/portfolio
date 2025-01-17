import React from "react";

const Contact: React.FC = () => {
  // Optional: Add a state for handling form inputs
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Optional: Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement what happens when the form is submitted
    console.log({ email, subject, message });
    // Typically you would send this data to a server
  };

  return (
    <section className="contact section container" id="contact">
      <div className="contact__container grid">
        <div className="contact__box">
          <h2 className="section__title">
            Reach out to us today <br /> via any of the given <br /> information
          </h2>

          <div className="contact__data">
            <div className="contact__information">
              <h3 className="contact__subtitle">Call us for instant support</h3>
              <span className="contact__description">
                <i className="ri-phone-line contact__icon"></i>
                +999 888 777
              </span>
            </div>

            <div className="contact__information">
              <h3 className="contact__subtitle">Write us by mail</h3>
              <span className="contact__description">
                <i className="ri-mail-line contact__icon"></i>
                user@email.com
              </span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form">
          <div className="contact__inputs">
            <div className="contact__content">
              <input
                type="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contact__input"
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
