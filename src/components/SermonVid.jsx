import { useState } from "react";
import SecHeading from "./common/SecHeading";
import { motion } from "framer-motion";
import { PiPlayCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const SermonVid = () => {
  const [vidHovered, setVidHovered] = useState(false);
  // const [playBtClick, setPlayBtClick] = useState(false);
  const handleHover = () => {
    setVidHovered(true);
  };

  return (
    <section className="sermon_video p-9 px-4 max-w-[500px] md:max-w-full mx-auto flex flex-col items-start md:flex-row md:items-center md:gap-8 md:px-16 py-12 min-h-[60vh]">
      <div
        className="video_mask  text-[4rem] relative grayscale-[10%]  object-cover md:w-[50%]  "
        onMouseOver={handleHover}
        onMouseOut={() => setVidHovered(false)}
      >
        <div className="vidMask_cover bg-[#000000] w-full h-full  ">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1739227932/homchapel/DSC_0824_h6nejc.webp"
            alt=""
            className={`h-full w-full ease-in-out duration-300 ${
              vidHovered ? "opacity-60" : ""
            }`}
          />

          <Link
            to={"https://web.facebook.com/homchapel"}
            target="_blank"
            aria-label="youtube videos"
          >
            <PiPlayCircleLight
              className={`playBt absolute top-0 left-0 right-0 bottom-0 m-auto text-white md:text-[6rem]  hover:cursor-pointer hover:text-[var(--second-color)] hover:scale-105 ease-in-out duration-300`}
              // onClick={handlePlayClick}
            />
          </Link>
        </div>
      </div>
      {/* <VidModal isPlaying={playBtClick} /> */}

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
        className="sermonvid_text flex flex-col items-start gap-4 md:gap-7 md:w-[50%] "
      >
        <SecHeading
          divStyle={"mt-4"}
          subheading={"sermon video"}
          mainheading={"watch our latest sermon"}
          mainStyle={
            "text-[2rem]  md:leading-[3rem] md:text-[2.5rem] capitalize max-w-[400px] text-[#062e36] md:max-w-[500px] "
          }
          subStyle={"text-[1.8rem] md:text-[2.2rem] "}
        />
        <p className="text-[.9rem] md:text-[1rem] text-[#5b6b6f] md:max-w-[500px] leading-6 dark:text-[var(--dark-white)]">
          Step into a world of faith, love, and community at HOM CHAPEL. Here,
          we&apos;re not just a congregation; we&apos;re a family united by
          faith and fueled by love. Join us on this exciting journey of worship,
          growth, and fellowship. Discover a place where your spirit soars, your
          heart finds peace, and your soul feels at home. Let&apos;s walk hand
          in hand as we embrace the joy of faith and the power of togetherness.
        </p>
        <Link
          to={"https://web.facebook.com/homchapel"}
          target="_blank"
          className="bg-[var(--main-color)] py-3 px-8 capitalize rounded-sm text-white border border-[var(--main-color)] hover:bg-transparent hover:text-[var(--main-color)]"
        >
          latest sermon
        </Link>
      </motion.div>
    </section>
  );
};

export default SermonVid;
