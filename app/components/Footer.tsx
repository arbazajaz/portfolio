import React from "react";
import Link from "next/link";

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
            <li className="footer__information">1234 - Peru</li>
            <li className="footer__information">La Libertad - 43210</li>
            <li className="footer__information">+123-456-789</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer__content">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__data">
            <li className="footer__information">+999 888 777</li>
          </ul>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Facebook"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Instagram"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Twitter"
            >
              <i className="ri-twitter-fill"></i>
            </a>
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
