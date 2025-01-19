import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#" className="footer__logo" aria-label="Go to homepage">
            <i className="ri-leaf-line footer__logo-icon"></i> Plantex
          </a>
          <h3 className="footer__title">
            Subscribe to our newsletter <br /> to stay updated
          </h3>
          <div className="footer__subscribe">
            <input type="email" placeholder="Enter your email" className="footer__input" />
            <button className="button button--flex footer__button">
              Subscribe
              <i className="ri-arrow-right-up-line button__icon"></i>
            </button>
          </div>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Our Address</h3>
          <ul className="footer__data">
            <li className="footer__information">1234 - Peru</li>
            <li className="footer__information">La Libertad - 43210</li>
            <li className="footer__information">123-456-789</li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__data">
            <li className="footer__information">+999 888 777</li>
            <div className="footer__social">
              <a href="https://www.facebook.com/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="ri-facebook-fill"></i>
              </a>
              <a href="https://www.instagram.com/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://twitter.com/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">
            We accept all credit cards
          </h3>
          <div className="footer__cards">
            <Image src="/assets/img/card1.png" alt="" width={100} height={60} />
            <Image src="/assets/img/card2.png" alt="" width={100} height={60} />
            <Image src="/assets/img/card3.png" alt="" width={100} height={60} />
            <Image src="/assets/img/card4.png" alt="" width={100} height={60} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
