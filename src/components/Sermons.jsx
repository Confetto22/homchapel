import { Link } from "react-router-dom";
import SecHeading from "./common/SecHeading";

const allSermons = [
  {
    title: "Attitude - Part 1",
    ref: "https://www.podbean.com/player-v2/?i=9yc9m-175f639-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3ab278",
  },
  {
    title: "Divine Impartation",
    ref: "https://www.podbean.com/player-v2/?i=zemrw-175f755-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3ab278",
  },
  {
    title: "SELF DELIVERNCE",
    ref: "https://www.podbean.com/player-v2/?i=nvmj3-1763409-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3ab278",
  },
  {
    title: "DIFFICULT BUT NOT IMPOSSIBLE",
    ref: "https://www.podbean.com/player-v2/?i=5wij7-1763408-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3ab278",
  },
  // {
  //   title: "ATTITUDE - PART 1",
  //   ref: "https://www.podbean.com/player-v2/?i=9yc9m-175f639-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3ab278",
  // },
];

const Sermons = () => {
  return (
    <section className="  w-full h-full  px-7 py-16 flex flex-col items-center gap-5">
      {/* <div className="bg_cover cover bg-[#000000d8] w-full h-full  px-7 py-16 flex flex-col items-center gap-5"> */}
      {/* <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265448/homchapel/homlogo_ucmyp7.webp"
          alt="church logo"
          className="max-w-[300px] "
        /> */}
      <SecHeading
        animateInitial={{ y: 70, opacity: 0 }}
        animateWhileInView={{ y: 0, opacity: 1 }}
        divStyle={"flex flex-col gap-4 items-center justify-center text-center"}
        subheading={"House Of Mystery Podcasts"}
        mainheading={
          " Listen to powerful teachings from our MAN FROM GOD, Dr. Cloudio on topics such as Spiritual Living, Purpose, Healing and Health, The Holy Spirit, Prayer, Soul Winning and More..."
        }
        subStyle={"text-[2.3rem] md:text-[2.8rem] font-bold leading-9"}
        mainStyle={
          "text-[1rem] text-[#1a1a1a] md:text-[1rem] max-w-[760px] dark:text-[#fff]"
        }
      />

      <div className="allSermons grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-4">
        {allSermons.map((sermon) => (
          <iframe
            key={sermon.title}
            title={sermon.title}
            allowtransparency="true"
            height="150"
            width="100%"
            className="border: none; min-width: min(100%, 430px);height:150px;"
            scrolling="no"
            data-name="pb-iframe-player"
            src={sermon.ref}
            loading="lazy"
          ></iframe>
        ))}
      </div>
      <Link
        to={"https://enockagyei1999.podbean.com/"}
        className="bg-[var(--main-color)] text-stone-200 rounded-full px-7 py-3 text-[.9rem] font-semibold border-2 border-[var(--main-color)] hover:bg-stone-200 hover:text-[var(--main-color)] mt-4"
      >
        More Episodes
      </Link>
      {/* </div> */}
    </section>
  );
};

export default Sermons;
