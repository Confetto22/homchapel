import { useState } from "react";
import "./BackTop.css";
import { useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTop && (
        <button className="back_top" onClick={scrollUp}>
          <IoIosArrowUp />
        </button>
      )}
    </>
  );
};

export default BackTop;
