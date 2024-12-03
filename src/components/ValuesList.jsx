// import "../styles/Values.css";
// import ValuesCard from "./ValuesCard";
import { TbTargetArrow } from "react-icons/tb";
import { PiBinoculars } from "react-icons/pi";
import { IoDiamondOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const iconStyle = [" text-[5rem] rounded-full p-[1rem] text-white"];

const valuesList = [
  {
    id: 1,
    icon: (
      <TbTargetArrow
        className={`values_icon bg-[var(--main-color)] ${iconStyle}`}
      />
    ),
    heading: "Our Mission (5Is)",
    description: "Inspire, Impact, Impart, Invest, Insight... ",
  },
  {
    id: 2,
    icon: (
      <PiBinoculars
        className={`values_icon bg-[var(--second-color)] ${iconStyle}`}
      />
    ),
    heading: "Our Vision",
    description:
      "We are kingdom conscious, Spirit-filled, faith based and word centered; to engrace, divinely restore and to multiply disciples.",
  },
  // {
  //   id: 3,
  //   icon: (
  //     <IoDiamondOutline
  //       className={`values_icon bg-[var(--main-color)] ${iconStyle}`}
  //     />
  //   ),
  //   heading: "Core Values",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet modi exercitationem assumenda.",
  // },
];

const ValuesList = () => {
  return (
    <section className="about_values my-16 grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center px-4">
      {valuesList.map((singleValue) => (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            y: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
            // duration: 4,
          }}
          viewport={{ once: true }}
          key={singleValue.heading}
          className="values_card w-full h-full bg-transparent flex flex-col items-center justify-center text-center gap-2 max-w-[350px] p-3 py-5 min-h-[14rem] rounded-md"
        >
          {singleValue.icon}
          <p className="values_heading text-[#1f1f1f] text-[1.5rem]  tracking-wide dark:text-white">
            {singleValue.heading}
          </p>
          <hr className="cardDivide" />
          <p className="values_desc text-[#1f1f1f] text-sm leading-6 font-light dark:text-[var(--dark-white)]">
            {singleValue.description}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default ValuesList;
