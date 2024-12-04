import HeroCard from "../components/common/HeroCard";
import SecHeading from "../components/common/SecHeading";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import UpcomingEvt from "../components/UpcomingEvt";
import GetConnected from "../components/GetConnected";
import BibleVerse from "../components/BibleVerse";
import TestimonialList from "../components/Testimonials/TestimonialList";
import Marquee from "../components/common/marquee/Marquee";
import CustomButton from "../components/common/CustomButton";
import { motion } from "framer-motion";

// import Departments from "../components/Departments";
import SermonVid from "../components/SermonVid";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <section className="homepage  ">
      <HeroCard />
      <Marquee marqueestyle={"bg-[var(--main-color)] h-[10vh]"}>
        <p className="uppercase font-semibold text-[1.1rem] md:text-[1.6rem] text-white">
          Welcome to our online sanctuary! Step into a place of love, hope and
          faith. | We&apos;re delighted to have you here with us and we
          can&apos;t wait to meet you this sunday at 07:00 am. | house of
          mystery - building spiritual colossal | hom chapel - home for the lost
          and broken.
        </p>
      </Marquee>
      <SermonVid />

      <UpcomingEvt />
      <Departments />

      <div className="planVisit_banner min-h-[30vh] bg-[var(--main-color)] flex flex-col md:flex-row md:items-center md:justify-between  justify-center gap-4 p-6 md:px-12 items-start">
        <p className="text-white font-semibold text-[1.4rem] md:text-[2rem] md:max-w-[70%] capitalize">
          Find Out the latest news and announcements from house of mystery
          chapel international
        </p>
        <Link
          to={"/blog"}
          className="text-white border border-white md:w-[20%] flex items-center justify-center py-3 text-md:[1.2rem] font-semibold capitalize px-8 md:px-0 hover:bg-white hover:text-[var(--main-color)] ease-linear duration-300"
        >
          our blog
        </Link>
      </div>

      <div className="homepage_loc bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1733016490/homchapel/DSC_4237_bhpc9u.webp')]  bg-cover bg-center min-h-[50vh] ">
        <div className="cover bg-[#0000009d] w-full h-full flex flex-col  justify-center px-8 md:py-24 py-12 gap-7 min-h-[50vh]">
          <SecHeading
            animateInitial={{ y: 70, opacity: 0 }}
            animateWhileInView={{ y: 0, opacity: 1 }}
            divStyle={"flex flex-col gap-4"}
            subheading={"Location"}
            mainheading={
              "Locate House Of Mystery at Tatop, Weija. Right on top of Zulu Garden. We can't wait to meet you this Sunday!"
            }
            subStyle={"text-[2rem] md:text-[2.4rem]"}
            mainStyle={
              "text-[1.5rem] text-[#fff] md:text-[2.5rem] max-w-[760px]"
            }
          />
          <div className="loc_buttons flex flex-row items-center justify-start gap-4">
            <Link to={"/contact"}>
              <CustomButton
                text={"contact"}
                buttonStyle={
                  "py-2 px-6 bg-[#fff] hover:text-[#fff] capitalize hover:bg-[var(--main-color)] text-black"
                }
              />
            </Link>
            <Link
              to={
                "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu"
              }
              target="_blank"
            >
              <CustomButton
                text={"get directions"}
                buttonStyle={
                  "py-2 px-6 bg-[var(--main-color)] hover:bg-white hover:text-[#000] text-[#fff] capitalize"
                }
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="homepage_beliefs mt-12 mb-4 px-8 flex flex-col gap-7 max-w-[500px] md:max-w-full mx-auto py-12 pb-20">
        <div
          className={`singleBieleif flex flex-col  gap-4 md:gap-16 md:justify-center md:flex-row-reverse  md:text-right items-center`}
        >
          <motion.img
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
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1723215474/homchapel/IMG_8310_wux2to_fgpc61.webp"
            alt="beliefs"
            className="w-full md:w-[40%] aspect-[9/8] object-cover"
          />
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
            className="homebelief_text flex flex-col items-start gap-3 md:gap-6 md:items-end"
          >
            <SecHeading
              subheading="Beliefs"
              mainheading="Our Mission"
              subStyle={"text-[2rem] md:text-[2.4rem]"}
              mainStyle={
                "text-[1.7rem] text-[#062e36] md:text-[2.5rem] max-w-[760px]"
              }
            />
            <p className="text-[#062e36]  leading-6 max-w-[360px] dark:text-[var(--dark-white)]">
              We are kingdom conscious, Spirit-filled, faith based and word
              centered; to engrace, divinely restore and to multiply disciples.
            </p>
            <Link
              to={"/about-us"}
              className="bg-[var(--main-color)] text-white text-[1rem] py-3 px-12 rounded-full hover:bg-transparent hover:text-[var(--main-color)] border border-[var(--main-color)] ease-linear duration-300"
            >
              About Us
            </Link>
          </motion.div>
        </div>
      </div>
      <section className="join_church ">
        <div className="joinchurch_head ">
          <div className="joinchurch_cover min-h-[45vh]">
            <div className="joinchurch_images">
              <div className="column_align">
                <img
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1723215473/homchapel/IMG_4190_kptxto_niucbl.webp"
                  alt="house of mystery photo"
                />
                <img
                  src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1723215473/homchapel/IMG_4176_wasdqf_egqbyb.webp"
                  alt="house of mystery photo"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1723215475/homchapel/IMG_4166_kjuet8_bguhrr.webp"
                alt="house of mystery photo"
                className="singleImage"
              />
            </div>
            <div className="joinchurch_head_text  flex flex-col items-start gap-4 md:w-full">
              <p className="join_us_tag bg-[#ffbc1141] text-[var(--second-color)] p-1 px-3 rounded-md text-[1.1rem]">
                Come Join us!
              </p>
              <p className="joinchurch_briefText text-white font-semibold text-[1.3rem] md:text-[1.5rem] max-w-[500px] ">
                The church is the one institution that exists for those outside
                it.
              </p>
              <Link
                to={"/new-here"}
                className="learnmore_link hover:opacity-70 ease-in-out duration-300 underline text-white"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GetConnected />
      <TestimonialList />

      <section className="prayer_request bg-[url('https://img.freepik.com/free-photo/woman-praying-her-loved-ones_23-2148869278.jpg?t=st=1724973124~exp=1724976724~hmac=f63d9d6e4e3a7a91a266aa71453f0b82a1b9ecdb97743d03adef4c11dec2961a&w=740')] bg-center bg-cover min-h-[50vh]">
        <div className="prayer_cover bg-[#0000008f] h-full w-full min-h-[50vh] p-8 flex flex-col items-end justify-center text-white gap-5 text-right md:pr-20">
          <p className="text-[1.6rem] md:text-[2.2rem] max-w-[740px] capitalize">
            Have a prayer request? Share your prayer with us via our prayer
            wall.
          </p>
          <Link
            to={"/prayer-wall"}
            className="bg-[var(--main-color)] px-6 py-3 text-[1.1rem] rounded-sm hover:bg-transparent hover:text-[var(--main-color)] border border-[var(--main-color)] ease-in-out duration-300"
          >
            Prayer Wall
          </Link>
        </div>
      </section>

      <section className="main_service py-12 px-6 flex flex-col gap-3 items-start max-w-[500px] md:max-w-full mx-auto md:flex-row md:gap-12 md:items-center md:justify-center min-h-[60vh]">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1728646406/homchapel/homservices_tnt8ym.webp"
          alt="sunday service"
          className="mainservice_img w-full md:w-[40%]"
        />
        {/* <div className="mainservice_text flex flex-col gap-2 items-start md:w-3/6 md:max-w-[450px] ">
          <SecHeading
            animateInitial={{ y: 70, opacity: 0 }}
            animateWhileInView={{ y: 0, opacity: 1 }}
            divStyle={"flex flex-col gap-0"}
            subheading={"join our service"}
            mainheading={"Restoration Hour Service on Sundays at 07:00 AM"}
            subStyle={"text-[2rem] md:text-[2.4rem]"}
            mainStyle={
              "text-[1.5rem] text-[#062e36] md:text-[1.7rem] lg:text-[2rem] max-w-[760px]"
            }
          />
          <motion.p
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              y: { type: "spring", duration: 1, stiffness: 40 },
              opacity: { duration: 2 },
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="text-sm leading-6 md:text-[1rem] text-[#062e36] dark:text-[var(--dark-white)]"
          >
            Join us every sunday morning as deep mysteries in the Kingdom of God
            are unveiled. This service is aimed at enhancing your spiritual
            growth and taking you a step closer in your walk with God.
            You&apos;ll find a place of spiritual growth, meaningful worship,
            and opportunities to connect with others.
          </motion.p>
        </div> */}
      </section>
      <BibleVerse />
    </section>
  );
};

export default Home;
