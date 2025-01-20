import React from "react";
import Image from "next/image";
import Link from "next/link";
import socialLinks from "@/app/config/socialLinks";

const Hero: React.FC = () => {
  return (
    <section className="home" id="home">
      <div className="home__container container grid">
        {/* Replace <img> with Next.js <Image> for optimized loading */}
        <div className="home__img">
          <Image
            src="/assets/img/laravel-hero.png" // Replace with an appropriate Laravel-related image
            alt="Laravel Development"
            width={500}
            height={300}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="home__data">
          <h1 className="home__title">
            Build Fast <br /> Applications with Laravel
          </h1>
          <p className="home__description">
            I&apos;m a professional PHP Laravel developer with a passion for
            building robust, secure, and scalable web applications. From API
            integrations to enterprise-level solutions, I turn ideas into
            reality.
          </p>
          {/* Use <Link> for internal navigation */}
          <Link legacyBehavior href="#about">
            <a className="button button--flex">
              Learn More About Me{" "}
              <i className="ri-arrow-right-down-line button__icon"></i>
            </a>
          </Link>
        </div>

        <div className="home__social">
          <span className="home__social-follow">Connect With Me</span>
          <div className="home__social-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="home__social-link"
              >
                <i className={link.iconClass}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
