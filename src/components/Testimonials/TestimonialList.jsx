// import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import SecHeading from "../common/SecHeading";

const TestimonialList = () => {
  return (
    <div className="testimonials font-['Quicksand'] bg-[url('https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg')] bg-center bg-cover  ">
      {/* <h2 className="testimonials_heading dark:text-gray-100 text-4xl font-semibold ">
        Testimonials
      </h2> */}
      <div className="testimonials_cover  flex flex-col gap-3 p-4 py-12 pb-6 md:pb-20 items-center bg-[#000000c2] w-full h-full">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1723334104/homchapel/Group-1486_yf4dkg.webp"
          alt="testimonials"
          className="rounded-full max-w-[60px] bg-[var(--main-color)]"
        />

        {/* <p className="dark:text-gray-200 text-xl">
        Find out what our citizens say{" "}
      </p> */}
        <SecHeading
          divStyle={"flex flex-col items-center max-w-[550px] text-center"}
          subheading={"Testimonials"}
          mainheading={"Find Out What Our Citizens Say"}
          subStyle={"text-[2rem] md:text-[2.4rem]"}
          mainStyle={"text-[1.7rem] text-[#fff] md:text-[2.5rem] max-w-[760px]"}
        />
        <div className="all_testimonials grid 1  gap-3">
          <Swiper
            // slidesPerView={3}
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              900: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper mt-8"
          >
            {testimonials.map((singleTestimonial) => {
              return (
                <SwiperSlide key={singleTestimonial.id} className="py-8 ">
                  <div className="testimonialCard  md:px-3  flex flex-col gap-3 min-h-[150px] rounded-md w-full mx-auto relative pt-10">
                    <q className="text-gray-200 text-[.9rem] md:text-[1.5rem] text-center font-[400]">
                      {singleTestimonial.desc}
                    </q>
                    <div className="testimonialPerson flex flex-row items-center gap-2 justify-center">
                      <img
                        src={singleTestimonial.pic}
                        alt="testimonial"
                        className="w-[60px] h-[60px] object-top  object-cover rounded-full absolute top-[-30px] border-2 border-[var(--main-color)]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;
