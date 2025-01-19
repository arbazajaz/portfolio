import React from "react";

const Steps: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Analyze Requirements",
      description:
        "Understand the client's needs, gather detailed requirements, and plan the development roadmap.",
    },
    {
      number: "02",
      title: "Design & Prototype",
      description:
        "Create wireframes and prototypes to visualize the solution and ensure alignment with the client’s expectations.",
    },
    {
      number: "03",
      title: "Develop Backend",
      description:
        "Write scalable, secure, and efficient server-side code using Laravel and PHP.",
    },
    {
      number: "04",
      title: "Integrate Frontend",
      description:
        "Integrate responsive, user-friendly frontend interfaces using Bootstrap, React, or Livewire.",
    },
    {
      number: "05",
      title: "Test & Optimize",
      description:
        "Conduct rigorous testing for performance, security, and scalability while optimizing the application for speed.",
    },
    {
      number: "06",
      title: "Deploy & Support",
      description:
        "Deploy the solution, ensure seamless integration, and provide ongoing support for enhancements.",
    },
  ];

  return (
    <section className="steps section container">
      <div className="steps__bg">
        <h2 className="section__title-center steps__title">
          Steps to Deliver <br /> Scalable Laravel Solutions
        </h2>

        <div className="steps__container grid">
          {steps.map((step) => (
            <div key={step.number} className="steps__card">
              <div className="steps__card-number">{step.number}</div>
              <h3 className="steps__card-title">{step.title}</h3>
              <p className="steps__card-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
