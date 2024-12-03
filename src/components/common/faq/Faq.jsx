// import "./Faq.css";
import { faqs } from "./FAQs";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className="all_faqs md:w-3/6">
      {faqs.map((faq) => (
        <Accordion
          key={faq.question}
          question={faq.question}
          answer={faq.answer}
          id={faq.id}
        />
      ))}
    </div>
  );
};

export default Faq;
