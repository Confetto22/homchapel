import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// import "./Accordion.css";

const Accordion = ({ question, answer }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleAccordion = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="accordion" onClick={toggleAccordion}>
      <div className="item bg-transparent dark:bg-[#cacaca]">
        <div className={`summary ${isVisible ? "active" : ""}`}>
          <p className="text"> {question}</p>
          <MdOutlineKeyboardArrowRight
            className={`icon ${isVisible ? "rotate" : ""}`}
          />
        </div>
        <div className={`hidden_box ${isVisible ? "active_box" : ""}`}>
          <p className="answer">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
