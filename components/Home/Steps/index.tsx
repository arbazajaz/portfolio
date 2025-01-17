import React from "react";

const Steps: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Plant",
      description: "We have several varieties of plants you can choose from.",
    },
    {
      number: "02",
      title: "Place an order",
      description:
        "Once your order is set, we move to the next step which is the shipping.",
    },
    {
      number: "03",
      title: "Get plants delivered",
      description:
        "Our delivery process is easy, you receive the plant direct to your door.",
    },
  ];

  return (
    <section className="steps section container">
      <div className="steps__bg">
        <h2 className="section__title-center steps__title">
          Steps to start your <br /> plants off right
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
