import React from "react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="about section container" id="about">
      <div className="about__container grid">
        <div className="about__img">
          <Image
            src="/assets/img/about-developer.png" // Use an image reflecting your developer persona
            alt="About Arbaz Ajaz"
            width={500}
            height={300}
            priority
          />
        </div>

        <div className="about__data">
          <h2 className="section__title about__title">About Me</h2>
          <p className="about__description">
            Hi, I’m Arbaz Ajaz, a passionate PHP Laravel Developer with over 3
            years of experience building scalable web applications and
            delivering high-performance solutions. Currently, I’m honing my
            skills at King Revolution Software House, where I specialize in
            creating real-time call-based applications, implementing advanced
            data handling techniques, and optimizing server-side performance.
          </p>

          <div className="about__details">
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i> Expert in
              Laravel, PHP, and MySQL.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i>{" "}
              Proficient in background job processing and real-time features.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i> Skilled
              in front-end integration with React, Bootstrap, and more.
            </p>
            <p className="about__details-description">
              <i className="ri-checkbox-fill about__details-icon"></i> Strong
              focus on delivering secure, scalable solutions.
            </p>
          </div>

          <Link legacyBehavior href="/assets/files/Arbaz_Ajaz_CV.pdf" passHref>
            <a
              className="button--link button--flex"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My CV <i className="ri-file-download-line button__icon"></i>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
