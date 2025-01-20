"use client";

import React from "react";

const Questions: React.FC = () => {
  const questions = [
    {
      title: "How do you ensure scalable Laravel applications?",
      content:
        "Scalability is achieved by following best practices such as efficient database queries, caching mechanisms, and implementing asynchronous tasks for heavy processes.",
    },
    {
      title: "What’s your approach to securing web applications?",
      content:
        "I use techniques like data validation, prepared SQL statements, encryption for sensitive data, and implementing robust authentication and authorization workflows.",
    },
    {
      title: "Do you provide post-deployment support?",
      content:
        "Yes, I provide ongoing support, including performance monitoring, issue resolution, and updates to ensure your application runs smoothly.",
    },
    {
      title: "Can you integrate third-party APIs?",
      content:
        "Absolutely! I have extensive experience integrating various third-party APIs, including payment gateways, social logins, and RESTful services.",
    },
    {
      title: "How do you optimize application performance?",
      content:
        "I focus on database indexing, caching, reducing server response time, optimizing assets, and leveraging tools like Redis or Memcached.",
    },
    {
      title: "Can you handle frontend development too?",
      content:
        "Yes, I have experience with React, Bootstrap, and Tailwind CSS, enabling me to deliver a seamless user experience along with a robust backend.",
    },
  ];

  return (
    <section className="questions section" id="faqs">
      <h2 className="section__title-center questions__title container">
        Some common questions <br /> were often asked
      </h2>

      <div className="questions__container container grid">
        {questions.map((question, groupIndex) => (
          <div className="questions__group" key={groupIndex}>
            <div className="questions__item">
              <header className="questions__header">
                <i className="ri-add-line questions__icon"></i>
                <h3 className="questions__item-title">{question.title}</h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">{question.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
