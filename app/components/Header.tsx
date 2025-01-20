import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link legacyBehavior href="#home" className="nav__logo font-bold">
          <a>
            Arbaz Ajaz
            <i className="ri-terminal-box-fill nav__logo-icon ms-2"></i>
          </a>
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link legacyBehavior href="#home">
                <a className="nav__link active-link">Home</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link legacyBehavior href="#about">
                <a className="nav__link">About</a>
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link legacyBehavior href="#products">
                <a className="nav__link">Products</a>
              </Link>
            </li> */}
            <li className="nav__item">
              <Link legacyBehavior href="#faqs">
                <a className="nav__link">FAQs</a>
              </Link>
            </li>
            <li className="nav__item">
              <Link legacyBehavior href="#contact">
                <a className="nav__link">Contact Us</a>
              </Link>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__btns">
          <i className="ri-moon-line change-theme" id="theme-button"></i>

          <div className="nav__toggle" id="nav-toggle">
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
