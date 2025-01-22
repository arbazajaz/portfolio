import React from "react";
import Link from "next/link";
import socialLinks from "../config/socialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        {/* Newsletter Section */}
        <div className="footer__content">
          <Link legacyBehavior href="#home" className="font-bold">
            <a className="footer__logo">
              Arbaz Ajaz
              <i className="ri-terminal-box-fill nav__logo-icon ms-2"></i>
            </a>
          </Link>
          <h3 className="footer__title">
            Subscribe to our newsletter <br /> for the latest updates
          </h3>
          <form className="footer__subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer__input"
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="button button--flex footer__button"
            >
              Subscribe
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
          </form>
        </div>

        {/* Address Section */}
        <div className="footer__content">
          <h3 className="footer__title">Our Address</h3>
          <ul className="footer__data">
            <li className="footer__information">Lahore, Punjab</li>
            <li className="footer__information">Pakistan</li>
            <li className="footer__information">+92 3166140 726</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer__content">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__data">
            <li className="footer__information">+92 3166140 726</li>
          </ul>

          <div className="footer__social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Payment Methods Section
        <div className="footer__content">
          <h3 className="footer__title">We Accept</h3>
          <div className="footer__cards">
            <Image
              src="/assets/img/card1.png"
              alt="Visa"
              width={100}
              height={60}
            />
            <Image
              src="/assets/img/card2.png"
              alt="MasterCard"
              width={100}
              height={60}
            />
            <Image
              src="/assets/img/card3.png"
              alt="American Express"
              width={100}
              height={60}
            />
            <Image
              src="/assets/img/card4.png"
              alt="Discover"
              width={100}
              height={60}
            />
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
