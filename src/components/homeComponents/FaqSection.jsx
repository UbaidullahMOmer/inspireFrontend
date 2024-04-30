import React, { useState } from "react";

function FaqSection() {
  const [faqs, setFaqs] = useState([
    {
      question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
      answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
    {
      question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
      answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
    {
      question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
      answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
    {
      question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
      answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
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
          Et pulvinar nec interdum integer id urna molestie porta nullam. A,
          donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor
          pharetra sed in mauris elementum sollicitudin.
        </div>
      </div>
      <div className="faq_questions">
        {faqs.map((faq, index) => (
          <div className="faq_question_div" key={index}>
            <div className="faq_question_top" onClick={() => toggleAnswer(index)}>
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
              <div className="faq_question_bottom">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
