import React, { useState } from "react";

const Questions: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Close the current open question
    } else {
      setOpenQuestion(index); // Open the clicked question
    }
  };

  const questions = [
    {
      title: "My flowers are falling off or dying?",
      content:
        "Plants are an easy way to add color, energy, and transform your space, but choosing the right plant is crucial.",
    },
    {
      title: "What causes leaves to become pale?",
      content:
        "Inadequate light or overwatering can cause plant leaves to pale. Ensure your plants are getting suitable light and water.",
    },
    {
      title: "What causes brown crispy leaves?",
      content:
        "Low humidity and dry soil are common reasons for brown crispy leaves. Consider misting your plants or using a humidifier.",
    },
    {
      title: "How do I choose a plant?",
      content:
        "Consider the light conditions and space of your home, as well as how much care you're willing to give.",
    },
    {
      title: "How do I change the pots?",
      content:
        "Choose a pot that is slightly larger than the current one and ensure it has good drainage.",
    },
    {
      title: "Why are gnats flying around my plant?",
      content:
        "Overwatering and organic decay within the pot can attract gnats. Allow the soil to dry out between waterings.",
    },
  ];

  return (
    <section className="questions section" id="faqs">
      <h2 className="section__title-center questions__title container">
        Some common questions <br /> were often asked
      </h2>
      <div className="questions__container container grid">
        {questions.map((question, index) => (
          <div
            key={index}
            className={`questions__group ${
              openQuestion === index ? "open" : ""
            }`}
          >
            <div
              className="questions__item"
              onClick={() => toggleQuestion(index)}
            >
              <header className="questions__header">
                <i
                  className={`ri-add-line questions__icon ${
                    openQuestion === index ? "ri-subtract-line" : "ri-add-line"
                  }`}
                ></i>
                <h3 className="questions__item-title">{question.title}</h3>
              </header>
              {openQuestion === index && (
                <div className="questions__content">
                  <p className="questions__description">{question.content}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
