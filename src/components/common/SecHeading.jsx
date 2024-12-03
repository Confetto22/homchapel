import { motion } from "framer-motion";

const SecHeading = ({
  subheading,
  mainheading,
  divStyle,
  mainStyle,
  subStyle,
  animateInitial,
  animateWhileInView,
}) => {
  return (
    <motion.div
      initial={{ ...animateInitial }}
      whileInView={{ ...animateWhileInView }}
      transition={{
        delay: 0.2,
        y: { type: "spring", duration: 1, stiffness: 40 },
        opacity: { duration: 2 },
        ease: "easeInOut",
        // duration: 4,
      }}
      // viewport={{ once: true }}
      className={`section_heading ${divStyle}`}
    >
      <p className={`subheading ${subStyle} text-[#f26837]`}>{subheading}</p>
      <p className={`mainheading ${mainStyle} dark:text-white`}>
        {mainheading}
      </p>
    </motion.div>
  );
};

export default SecHeading;
