import React, { useState } from "react";

function FaqSection() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is a pre-workout supplement?",
      answer:
        "A pre-workout supplement is a product designed to be consumed before exercise to enhance performance. It typically contains ingredients like caffeine, amino acids, and vitamins to increase energy, focus, and endurance during workouts.",
    },
    {
      question: "How does pre-workout supplement work?",
      answer:
        "Pre-workout supplements work by providing your body with ingredients that can improve energy levels, focus, blood flow, and endurance. For example, caffeine can increase alertness and reduce perceived exertion, while amino acids like citrulline and beta-alanine can enhance blood flow and reduce fatigue.",
    },
    {
      question: "Is it safe to take pre-workout supplements?",
      answer:
        "Pre-workout supplements can be safe when used as directed and in moderation. However, it's essential to be aware of the ingredients and potential side effects, especially if you have any pre-existing health conditions or sensitivities. Always consult with a healthcare professional before starting any new supplement regimen.",
    },
    {
      question: "When should I take a pre-workout supplement?",
      answer:
        "It's generally recommended to take a pre-workout supplement 30-60 minutes before exercise to allow enough time for the ingredients to be absorbed and take effect. However, the timing may vary depending on the specific product and your individual tolerance.",
    },
    {
      question: "What are the common ingredients in pre-workout supplements?",
      answer:
        "Common ingredients in pre-workout supplements include caffeine, beta-alanine, creatine, citrulline, arginine, branched-chain amino acids (BCAAs), and various vitamins and minerals. These ingredients are chosen for their potential to enhance energy, focus, endurance, and performance.",
    },
    {
      question: "Can I take pre-workout supplements every day?",
      answer:
        "While it's generally safe to take pre-workout supplements occasionally, using them every day may not be necessary or advisable for everyone. Regular use of high doses of caffeine or other stimulants can lead to tolerance, dependence, and potential side effects. It's essential to cycle off pre-workout supplements periodically to avoid these issues.",
    },
    {
      question: "Are there any side effects of pre-workout supplements?",
      answer:
        "Some common side effects of pre-workout supplements include jitteriness, insomnia, increased heart rate, digestive issues, and dehydration. These side effects are often associated with high doses of caffeine or other stimulants. It's essential to start with a low dose and monitor your body's response to avoid adverse reactions.",
    },
    {
      question: "Are pre-workout supplements only for bodybuilders?",
      answer:
        "No, pre-workout supplements are not only for bodybuilders. They can be beneficial for anyone looking to improve their exercise performance, whether it's endurance athletes, casual gym-goers, or fitness enthusiasts. However, it's essential to choose a pre-workout supplement that aligns with your specific goals and needs.",
    },
  ]);
  const toggleAnswer = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq_section">
      <div className="faq_header">
        <div className="faq_heading">
          Frequently asked <span>questions</span>
        </div>
        <div className="faq_paragraph">
          Common Questions About Pre-Workout Supplements: Everything You Need to
          Know
        </div>
      </div>
      <div className="faq_questions">
        {faqs.map((faq, index) => (
          <div className="faq_question_div" key={index}>
            <div
              className="faq_question_top"
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq_question">{faq.question}</div>
              <div className={`faq_arrow ${faq.isOpen ? "rotate-180" : ""}`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.4545 8.06144C4.89384 7.6221 5.60616 7.6221 6.0455 8.06144L12 14.0159L17.9545 8.06144C18.3938 7.6221 19.1062 7.6221 19.5455 8.06144C19.9848 8.50078 19.9848 9.21309 19.5455 9.65243L12.7955 16.4024C12.3562 16.8418 11.6438 16.8418 11.2045 16.4024L4.4545 9.65243C4.01517 9.21309 4.01517 8.50078 4.4545 8.06144Z"
                    fill="#EFB749"
                  />
                </svg>
              </div>
            </div>
            {faq.isOpen && (
              <div className="faq_question_bottom">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
