import { useState } from "react";
import SecHeading from "./common/SecHeading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const departmentList = [
  {
    name: "Akwaaba",
    description:
      "The ministry of welcoming people to church is one of the most crucial because it is one of the most visible in the church. When people come to church they are sometimes burdened, sad or discouraged. Each person, member or newcomer, comes with the hope to have an uplifting experience a time of renewal and celebration and be inspired. The Akwaaba team can make this a reality for those in attendance. This department's purpose is to assist the Head Pastor to meet, greet and assist visitors and members, to maintain order and reverence and to lead by example. some of their duties include Attending to guest pastors and ministers, Seating arrangement, Directing individuals out of the service and many others",
    gallery: [
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728262808/homchapel/IMG-20241006-WA0054_yijcio.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728262807/homchapel/IMG-20241006-WA0051_p8muik.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728262806/homchapel/IMG-20241006-WA0045_q3ydff.webp",
    ],
  },
  {
    name: "Protocol",
    description:
      "HOM Chapel's protocol team is divided in 3 sub departments; 1. Head Pastor's personal protocol, 2. Church security 3. Traffic control team... Some duties of the head pastor'spersonal protocols include Organizing the arrival and departure of Head Pastor, Attending to the Head Pastors needs during services, Ensure the Head Pastors' security and Man the head pastors office... Some duties of the church protocols onthe other hand include; Access control management, Surveillance, Crowd management, Evacuation,etc... The Traffic control team is also responsible for Aiding citizens to safely cross the road, Making a Parking space for Head Pastor, Car security and Ensuring appropriate parking",
    gallery: [
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725300942/homchapel/IMG-20240902-WA0096_wyzz6e.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725408942/homchapel/IMG-20240904-WA0022_pzlna7.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054653/homchapel/DSC_0449_yuqysx.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054648/homchapel/DSC_0327_l8gudd.webp",
    ],
  },
  // {
  //   name: "Pastors & Stewards",
  //   description:
  //     "Step into the realm of our stewards team, the dedicated caretakers of our church's well-being. With their unwavering commitment and diligence, they ensure that our church functions smoothly with harmony and order, they also make sure our church remains a welcoming sanctuary for all",
  //   gallery: [
  //     "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719493786/homchapel/567A9788_caxc6r_clahjc.webp",
  //     "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725301558/homchapel/IMG-20240825-WA0065_zp7cmk.webp",
  //     "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725301559/homchapel/IMG-20240827-WA0027_wi6a4z.webp",
  //     "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725301558/homchapel/IMG-20240902-WA0089_x7llod.webp",
  //   ],
  // },
  // {
  //   name: "Custodians",
  //   description:
  //     "The unsung heroes who ensure our church is a sanctuary of cleanliness and order. With diligence and care, they maintain the sacred space where our congregation gathers to worship...Our custodians are responsible for the cleanliness and general hygiene of the church premises. They are thus responsible for the following: Church cleaning, Assist with ministration covering, Offering cards and others",
  //   gallery: [
  //     "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725299468/homchapel/HOM11_lx0prg.jpg",
  //     "https://res.cloudinary.com/dv9aqxptd/image/upload/v1725299468/homchapel/HOM12_jvt8wb.jpg",
  //     "https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265235/homchapel/daddy-bg_kaivmk.jpg",
  //   ],
  // },
  {
    name: "Media",
    description:
      "Enter the dynamic world of our media team, where creativity meets technology to capture and share the essence of our church community. From stunning visuals to engaging content, they bring the spirit of our services to life online and beyond. Join us in celebrating the talent and dedication of our media team as they illuminate our faith journey through the power of digital storytelling...Among other things, the media team has the responsibility to ensure that HOM Chapel's messages reach a broader audience beyond our doors and our regular service times. They are responsible for creating, curating, and distributing content across various media platforms (social media, podcasts, live streams, websites, etc.)... some of their duties include Videography, Video editing, Live streaming, Projection, Photography and a lot more",
    gallery: [
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054655/homchapel/DSC_0074_efvy8i.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054650/homchapel/DSC_0332_vnfdbr.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054652/homchapel/DSC_1136_yzjead.webp",
      // "https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265023/homchapel/media-bg_zxnco5.jpg",
    ],
  },
  {
    name: "Choir",
    description:
      "Experience the divine melodies of our choir as they fill the air with songs of praise and worship. Let their harmonies transport you to a place of spiritual connection and joy. Dive into the heavenly tunes of our choir, where voices blend in harmony to uplift spirits and hearts... Join us in celebrating the beauty of music and faith together!",
    gallery: [
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265213/homchapel/choir-bg_ixafi4.jpg",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728262808/homchapel/IMG-20241006-WA0056_towc2e.webp",
      "https://res.cloudinary.com/dv9aqxptd/image/upload/v1728262807/homchapel/IMG-20241006-WA0059_gwlpsj.webp",
    ],
  },
];

const Departments = () => {
  const [department, setDepartment] = useState("Akwaaba");
  return (
    <section className="departments py-12 px-5">
      <SecHeading
        divStyle={"flex flex-col items-center"}
        subheading={"Our Staff"}
        mainheading={" Departments"}
        mainStyle={
          "text-[2rem]  md:leading-[3rem]  text-center md:text-[2.8rem] capitalize  text-[#062e36] md:max-w-[530px]"
        }
        subStyle={"text-[1.8rem] md:text-[2.2rem] text-center"}
      />
      <div className="all_depts flex flex-col  gap-3 max-w-[500px] md:max-w-full mx-auto">
        <div className="filterBtns grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 ">
          {departmentList.map((singleDept) => (
            <button
              key={singleDept.name}
              onClick={() => setDepartment(singleDept.name)}
              className={`${
                department === singleDept.name ? "currentFilterBtn" : ""
              }`}
            >
              {singleDept.name}
            </button>
          ))}
        </div>

        {departmentList.map(
          (deptInfo) =>
            department === deptInfo.name && (
              <div
                className="dept_info md:min-h-[50vh] flex flex-col md:justify-center  gap-3 items-start md:flex-row md:items-center    md:gap-5"
                key={deptInfo.name}
              >
                <Swiper
                  navigation={true}
                  loop={true}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  modules={[Navigation, Autoplay]}
                  className="mySwiper  imagesContainer md:w-3/6 lg:w-[40%] "
                >
                  {deptInfo.gallery.map((singleImage) => (
                    <SwiperSlide key={singleImage} className="">
                      <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2,
                          x: { type: "spring", duration: 1, stiffness: 40 },
                          opacity: { duration: 2 },
                          ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                        className="w-full h-full aspect-square"
                      >
                        <img
                          src={singleImage}
                          alt="church department"
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="deptText flex flex-col items-start gap-4 md:w-3/6 text-sm md:text-[1rem] pt-2  "
                >
                  <p className="dept_heading text-gray-600 dark:text-white flex items-center justify-center">
                    <svg
                      className="w-6 h-6 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="text-black font-bold text-[1.3rem] dark:text-white tracking-wider">
                      {deptInfo.name}
                    </span>
                  </p>
                  <p className="md:max-w-[500px] dark:text-[var(--dark-white)] leading-6">
                    {deptInfo.description}
                  </p>
                </motion.div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default Departments;
