import SecHeading from "./SecHeading";
import { Link } from "react-router-dom";

const HeroCard = () => {
  return (
    // <section className="hero bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1723215475/homchapel/pexels-jibarofoto-2014775_bles2s_gsaw33_fq0oea.webp')] h-[70vh] md:h-[100vh] bg-cover bg-center">
    <section className="hero  h-[80vh] md:h-[89vh] ">
      <video
        src="https://res.cloudinary.com/dv9aqxptd/video/upload/v1739787321/homchapel/MONTAGE_1_hyqco6.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="videoBg object-center object-cover h-full w-full"
      ></video>
      <div className="hero_cover bg-[#0000007a] h-full w-full flex flex-col items-center justify-center text-center p-3 gap-2">
        <SecHeading
          divStyle={"flex flex-col items-center"}
          subheading={"House Of Mystery Chapel International"}
          mainheading={"welcome HOM"}
          subStyle={
            "text-[#ffbd12] text-[2.3rem] md:text-[3.3rem] font-bold tracking-wide"
          }
          mainStyle={
            "text-white  text-[1.7rem] md:text-[3rem] max-w-[400px] md:max-w-[700px]"
          }
        />
        <Link
          to={"/new-here"}
          aria-label="new visitors"
          className="bg-[var(--main-color)] text-white px-8 md:px-8 py-3 text-[1.1rem] md:py-3 rounded-full  md:text-base md:text-[1.5rem] hover:bg-[var(--second-color)] ease-in-out duration-200"
        >
          I&apos;m New Here
        </Link>
      </div>
    </section>
  );
};

export default HeroCard;
