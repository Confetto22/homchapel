import PageHead from "../components/common/PageHead";
import SecHeading from "../components/common/SecHeading";
import { IoCalendarOutline } from "react-icons/io5";

import "../styles/NewHere.css";
import { TfiLocationPin } from "react-icons/tfi";
import { LuClock7 } from "react-icons/lu";
import Faq from "../components/common/faq/Faq";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const expectations = [
  {
    title: "Warm Welcome",
    detail:
      " From the moment you step through our doors, you'll be greeted with genuine smiles and open hearts. Our members are eager to introduce themselves and help you feel at home.",
  },
  {
    title: "Engaging Worship Services",
    detail:
      "Our worship services are designed to uplift and inspire. Expect heartfelt music, powerful messages, and an atmosphere filled with joy and reverence.",
  },
  {
    title: "Support and Growth",
    detail:
      "Our church is dedicated to supporting your spiritual journey. We offer resources like Bible studies, prayer groups, and mentorship programs to help you deepen your faith and navigate life's challenges.",
  },
];

const services = [
  {
    name: "Restoration Hour Service",
    day: "Sunday",
    time: "07:00AM - 10:45AM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737076672/homchapel/new-restoration_twiisc.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
  {
    name: "Convenant with the prophet",
    day: "1st Thursday of the month",
    time: "06:00PM - 08:00PM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1727873453/homchapel/covenant_with_the_prophet_escnva.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
  // {
  //   name: "Online sessions",
  //   day: "Tue & Thur",
  //   time: "07:00PM - 09:00PM",
  //   desc: "Restoration Hour Service",
  //   img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725297270/homchapel/Social_Media_Handle_brwcii.jpg",
  //   location: "Facebook Live",
  //   locationLink: "https://facebook.com/homchapel",
  // },
  {
    name: "You can Win",
    day: "Friday",
    time: "06:00PM - 08:00PM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728646406/homchapel/youcanwin_njiive.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
  {
    name: "You can Win",
    day: "Friday",
    time: "06:00PM - 08:00PM",
    desc: "Restoration Hour Service",
    img: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728646406/homchapel/prayerprophecy_yo96ni.webp",
    location: "Mystery Temple",
    locationLink:
      "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
];

const NewHere = () => {
  return (
    <section className="new_here">
      <PageHead
        pageName={"New Here?"}
        prevPage={"Home"}
        currentPage={"New Here"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp')]"
        }
        pageIntro={
          "Welcome to our church! We're thrilled to have you, feel right at home. Our community is a place of warmth, love, and support, where everyone is valued and welcomed. Whether you're exploring faith for the first time or looking for a new church family, we are excited to have you join us on this journey. In this section, you'll find information about our church. We encourage you to connect with us and ask questions. We can't wait to meet you and walk alongside you in your faith journey!"
        }
      />

      <section className="main_activities p-8 flex flex-col items-center">
        <SecHeading
          subheading={"Services"}
          mainheading={"Our Main Services"}
          subStyle={"text-[2rem] md:text-[2.7rem]"}
          mainStyle={
            "text-[1.7rem] text-[#062e36] md:text-[3.3rem] max-w-[760px] capitalize"
          }
          divStyle={"text-center"}
        />
        <Swiper
          // slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            740: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper "
        >
          <div className="all_activities">
            {services.map((singleService) => (
              <SwiperSlide key={singleService.name}>
                <div className="activity ">
                  <div className="overflow-hidden h-5/6">
                    <img
                      src={singleService.img}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                  {/* <div className="service_text bg-transparent  flex flex-col items-start justify-center p-2 gap-2 py-4 ">
                    <p className="font-bold text-[1.2rem] dark:text-white">
                      {singleService.name}
                    </p>
                    <p className="text-sm flex items-center gap-1 font-semibold text-[#292929] dark:text-gray-400 capitalize">
                      <IoCalendarOutline className="text-[1.2rem] text-[var(--main-color)]" />{" "}
                      {singleService.day}
                    </p>
                    <p className="text-sm flex items-center gap-1 font-semibold text-[#292929] dark:text-gray-400">
                      <LuClock7 className="text-[1.2rem] text-[var(--main-color)]" />{" "}
                      {singleService.time}{" "}
                    </p>
                    <Link
                      to={singleService.locationLink}
                      target="_blank"
                      className="flex items-center gap-1 text-sm font-semibold text-[#292929] hover:underline underline-offset-2 ease-in-out duration-200 hover:text-black dark:hover:text-white dark:text-gray-400"
                    >
                      <TfiLocationPin className="text-[1.2rem] text-[var(--main-color)]" />{" "}
                      {singleService.location}
                    </Link>
                    
                  </div> */}
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </section>

      <section className="newhere_loc py-12 px-4 flex flex-col gap-6 md:flex-row md:justify-center md:items-center md:gap-12 ">
        <div className="loc_text md:w-3/6 md:max-w-[500px] flex flex-col gap-2 md:gap-4">
          <SecHeading
            subheading={"Our Location"}
            mainheading={"plan a visit"}
            subStyle={"text-[2rem] md:text-[2.7rem]"}
            mainStyle={
              "text-[1.7rem] text-[#062e36] md:text-[3.3rem] max-w-[760px] capitalize"
            }
          />
          <p className="text-sm text-[#062e36] md:leading-6 dark:text-[var(--dark-white)]">
            No matter what stage, age, or season you find yourself in,{" "}
            <b>HOM Chapel</b> is for you! We invite you to come just as you are
            and be part of this community of people who are striving together to
            discover God&apos;s purpose and plan for their lives!
          </p>
          <div className="address_service grid grid-cols-1 md:grid-cols-2 mt-4 gap-3">
            <div className="address flex flex-col items-start gap-1">
              <p className="flex items-center justify-center text-[#062e36] dark:text-white font-bold gap-1">
                <TfiLocationPin className="text-[var(--main-color)] text-[1.2rem]" />
                Address:
              </p>
              <p className="capitalize text-sm leading-6 font-light text-[#062e36] dark:text-[var(--dark-white)]">
                Weija Tatop, Accra <br /> On top of Zulu garden
              </p>
            </div>
            <div className="service flex flex-col items-start gap-1">
              <p className="flex items-center justify-center text-[#062e36] dark:text-white font-bold gap-1">
                <LuClock7 className="text-[var(--second-color)] text-[1.1rem]" />
                Service Times:
              </p>
              <p className="capitalize text-sm leading-6 font-light text-[#062e36] dark:text-[var(--dark-white)]">
                sundays 07:00AM - 10:45AM <br /> fridays 06:00PM - 08:45PM
              </p>
            </div>
          </div>
        </div>
        <div className="loc_map  min-h-[40vh] max-h-[50vh] lg:min-h-[60vh] md:w-3/6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15884.355996832388!2d-0.33670032534401534!3d5.553824171056825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sHouse%20of%20Mystery%20Chapel%20International!5e0!3m2!1sen!2sus!4v1723768237244!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full min-h-[40vh] max-h-[50vh] lg:min-h-[60vh]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className="expect p-8 py-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-8 max-w-[600px] md:max-w-full mx-auto">
        <motion.img
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
            // duration: 4,
          }}
          viewport={{ once: true }}
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0853_z9hg0z.webp"
          alt="what to expect"
          className="w-full md:w-3/6 lg:w-[40%] md:aspect-[9/8] object-cover"
        />
        <div className="expect_text flex flex-col items-start gap-4 md:w-3/6 md:pr-12">
          <SecHeading
            subheading={"Worship Experience"}
            mainheading={"What To Expect?"}
            subStyle={"text-[1.7rem] md:text-[2.4rem]"}
            mainStyle={
              "text-[2.3rem] text-[#062e36] md:text-[2.7rem] max-w-[760px] md:leading-10"
            }
          />
          <ul className="expect_list flex flex-col gap-2">
            {expectations.map((singleExpectation) => (
              <motion.li
                initial={{ x: -70, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                  // duration: 4,
                }}
                // viewport={{ once: true }}
                className="expectation text-sm dark:text-[var(--dark-white)]"
                key={singleExpectation.detail}
              >
                <b className="text-[1rem] dark:text-white">
                  {singleExpectation.title}:{" "}
                </b>
                <br />
                {singleExpectation.detail}
              </motion.li>
            ))}
          </ul>
          <p className=" font-semibold dark:text-white capitalize">
            We can&apos;t wait to meet you and share in this journey of faith
            together! Come as you are; you&apos;re always welcome here.
          </p>
          {/* <p className="text-[#062e36]  leading-6">
            Fusce quam mauris, venenatis id nibh posuere, dignissim dapibus
            lacus. Suspendisse ac lacus volutpat, malesuada nisi in, pretium
            enim. Ut eget molestie sapien, non mollis libero. Cras volutpat
            mollis lorem sit amet rhoncus. Donec dictum dui at nulla feugiat
            pellentesque.
          </p>
          <CustomButton
            text={"Donate"}
          
            buttonStyle={
              "py-3 px-12 bg-[var(--main-color)] text-[#fff] hover:bg-[var(--second-color)] ease-in duration-200"
            }
          /> */}
        </div>
      </div>
      <section className="faq_welcome px-4 my-12">
        <SecHeading
          divStyle={"flex flex-col items-center justify-center"}
          subheading={"FAQ"}
          mainheading={"get to know more"}
          subStyle={"text-[2rem] md:text-[3.4rem]"}
          mainStyle={
            "text-[1.7rem] text-[#062e36] md:text-[3rem] max-w-[760px] capitalize"
          }
        />
        <div className="column flex flex-col-reverse gap-6 mt-4 items-center md:flex-row md:gap-8 md:pb-8 ">
          <Faq />
          {/* <div className="welcome_vidBox max-w-[600px] md:w-3/6">
            <video className="w-full h-full" controls>
              <source
                src="https://res.cloudinary.com/dv9aqxptd/video/upload/v1723415227/homchapel/HeroBgVideo_xss1qr.mp4"
                type="video/mp4"
              />
            </video>
          </div> */}
          <div className="welcome_vidBox w-full md:w-3/6 lg:w-[43%]">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722542287/homchapel/IMG_4195_kmdmjb.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default NewHere;
