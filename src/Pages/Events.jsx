import CountDown from "../components/common/CountDown";
import PageHead from "../components/common/PageHead";
import { TfiLocationPin } from "react-icons/tfi";
import { LuClock7 } from "react-icons/lu";
import "../styles/Events.css";
import { MiniCountDown } from "../components/common/CountDown";
import { allEvts } from "../components/common/allEvts";
import { Link } from "react-router-dom";
import { useState } from "react";
import Drawer from "../components/common/drawer/Drawer";
import DrawerContent from "../components/common/drawer/DrawerContent";
// import Gallery from "../components/common/gallery/Gallery";

export const churchGoogleMaps =
  "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16.75z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu";

const Events = () => {
  const [drawer, setDrawer] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const handleItemClick = (item) => {
    setDrawerContent(<DrawerContent currentItem={item} />);
    setDrawer(true);
  };
  // const handleDrawer = () => {
  //   setDrawer(!drawer);
  // };
  const closeDrawer = () => {
    setDrawer(false);
  };
  const nearestEvt = allEvts[0];

  return (
    <section className="events_page">
      <PageHead
        pageName={"Our Events"}
        prevPage={"Home"}
        currentPage={"Events"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1724631366/homchapel/Daddy2_k80uhn.webp')]"
        }
        pageIntro={
          "Join us for a variety of uplifting events that bring our community together in faith and fellowship. From inspiring sermons to engaging workshops, there's something for everyone to connect, grow, and celebrate together. Explore our upcoming events and mark your calendar to be part of these special moments!"
        }
      />
      <p className="upcomingEvt_heading  text-[2rem] md:text-[3rem] text-center capitalize font-bold my-8 dark:text-white text-black">
        upcoming Events
      </p>
      <div className="evts_prelude  p-6 flex flex-col gap-2 items-center text-center dark:text-[var(--dark-white)]">
        <p className="prelude_date font-bold uppercase text-[1.5rem] md:text-[1.8rem]">
          {nearestEvt.day} {nearestEvt.month}, {nearestEvt.year}
        </p>
        <p className="prelude_text max-w-[800px] text-sm leading-6 md:text-[1.2rem] font-semibold">
          {nearestEvt.brief} Mazal Tov!🔥 <br />
          #DrCloudio 🎤 #HoMChapel⛪
        </p>
        <Link
          to={churchGoogleMaps}
          target="_blank"
          className="bg-[var(--main-color)] py-3 rounded-sm px-9 mt-2 text-white capitalize font-semibold hover:bg-[var(--second-color)] ease-in duration-200 hover:text-black"
        >
          see location
        </Link>
      </div>
      <CountDown
        month={nearestEvt.month}
        day={nearestEvt.day}
        year={nearestEvt.year}
      />
      <div className="allEvents grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center my-8 px-4 md:place-items-start">
        {allEvts.map((evt) => (
          <div
            className="event max-w-[400px] rounded-t-md relative"
            key={evt.name}
          >
            <div className="imgBox relative rounded-t-md h-auto min-h-[20rem] max-h-[500px] overflow-hidden">
              <img
                src={evt.flyer}
                alt="church event"
                className="h-full w-full rounded-t-md  object-cover object-center hover:scale-105 ease-in-out duration-500"
              />
              <MiniCountDown month={evt.month} day={evt.day} year={evt.year} />
            </div>
            <div className="eventText p-3  min-h-[5rem] flex flex-col gap-2 items-start bg-[#d89a3034] dark:bg-[#292929] dark:text-white ">
              <p className="eventName font-bold text-[1.4rem] capitalize">
                {evt.name}
              </p>
              <div className="eventDets flex flex-row items-center justify-start gap-5 text-sm font-normal">
                <p className="flex items-center gap-1">
                  {" "}
                  <TfiLocationPin className="text-[var(--main-color)] text-[1.2rem]" />
                  {evt.location}
                </p>
                <p className="flex items-center gap-1">
                  <LuClock7 className="text-[var(--second-color)] text-[1.1rem]" />
                  {evt.time}
                </p>
              </div>
              <button
                onClick={() => handleItemClick(evt)}
                className="underline text-sm capitalize font-semibold hover:opacity-70 ease-in-out duration-200"
              >
                read more
              </button>
              {/* <p className="evt_desc text-sm">{evt.brief}</p> */}
            </div>
            <div className="evt_topdate absolute top-0 bg-[#d89a30d3] px-5 py-1 text-white font-semibold text-[.9rem] md:text-[1rem] rounded-tl-md capitalize flex flex-col items-center justify-center">
              <p>{evt.day} </p>
              <p>{evt.month.slice(0, 3)}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Gallery /> */}
      <Drawer onOpen={drawer} onClose={closeDrawer}>
        {drawerContent}{" "}
      </Drawer>
    </section>
  );
};

export default Events;
