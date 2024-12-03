// import { Link } from "react-router-dom";
import SecHeading from "./common/SecHeading";
import { motion } from "framer-motion";

const GetConnected = () => {
  return (
    <section className="get_connected px-8 py-12 lg:py-24 flex flex-col gap-4 max-w-[700px] lg:max-w-full mx-auto lg:flex-row lg:items-center lg:justify-center lg:gap-9 ">
      <motion.div
        initial={{ x: -70, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", duration: 1, stiffness: 40 },
          opacity: { duration: 2 },
          ease: "easeInOut",
          // duration: 4,
        }}
        viewport={{ once: true }}
        className="w-full lg:w-[40%] aspect-[9/8] object-cover "
      >
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1733016008/homchapel/DSC_4174_olquhm.webp"
          alt="get connected"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        initial={{ x: 70, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", duration: 1, stiffness: 40 },
          opacity: { duration: 2 },
          ease: "easeInOut",
          // duration: 4,
        }}
        viewport={{ once: true }}
        className="getConnected_text text-[#5b6b6f] flex flex-col gap-4 items-start text-[.9rem] lg:w-3/6 lg:pr-16"
      >
        <SecHeading
          divStyle={"max-w-[400px]"}
          subheading={"Get Connected"}
          subStyle={"text-[1.6rem] lg:text-[1.9rem]"}
          mainheading={"Becoming a Family Through Church"}
          mainStyle={"text-[2rem] lg:text-[2.3rem] text-[#062e36]"}
        />
        <p className="dark:text-[var(--dark-white)]">
          At our church, we believe that becoming a family through faith is at
          the core of our mission. Each individual brings unique gifts,
          experiences, and perspectives to our congregation, enriching our
          community and allowing us to grow together in faith and love. As we
          gather for worship, prayer, and service, we create an environment
          where everyone feels welcome and valued.
        </p>
        <p className="dark:text-[var(--dark-white)]">
          Our commitment to becoming a family through church extends beyond
          Sunday services; it is a continuous journey of love, encouragement,
          and spiritual growth. Join us as we walk this path together, embracing
          the joy of being part of a family united in faith.
        </p>
        {/* <Link
          to={"#"}
          className="bg-[var(--main-color)] text-white max-w-[200px] py-3 px-8 rounded-sm font-semibold text-[1rem] border border-[var(--main-color)] hover:bg-transparent hover:text-[var(--main-color)] ease-in-out duration-200"
        >
          Church Gallery
        </Link> */}
      </motion.div>
    </section>
  );
};

export default GetConnected;
