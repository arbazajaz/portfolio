import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        {/* Replace <img> with Next.js <Image> for optimized loading */}
        <div className="home__img">
          <Image
            src="/assets/img/home.png"
            alt="Home"
            width={500}
            height={300}
            layout="responsive"
          />
        </div>

        <div className="home__data">
          <h1 className="home__title">
            Plants will make <br /> your life better
          </h1>
          <p className="home__description">
            Create incredible plant design for your offices or apartments. Add
            freshness to your new ideas.
          </p>
          {/* Use <Link> for internal navigation */}
          <Link href="#about">
            <a className="button button--flex">
              Explore <i className="ri-arrow-right-down-line button__icon"></i>
            </a>
          </Link>
        </div>

        <div className="home__social">
          <span className="home__social-follow">Follow Us</span>
          <div className="home__social-links">
            {/* Links open in new tab, add rel="noopener noreferrer" for security */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-link"
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
