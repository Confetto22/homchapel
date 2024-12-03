import SecHeading from "./common/SecHeading";
import { GiClockwork } from "react-icons/gi";
import { GrMapLocation } from "react-icons/gr";
import { allEvts } from "./common/allEvts";
import { Link } from "react-router-dom";
import { RxDoubleArrowRight } from "react-icons/rx";

const evtPreviews = allEvts.slice(0, 3);

const UpcomingEvt = () => {
  return (
    <section className="upcoming_evt bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1726277634/homchapel/WhatsApp_Image_2024-08-21_at_13.16.09_f0x7qu.webp')] bg-center bg-cover min-h-[60vh]">
      <div className="cover bg-[#000000b7] w-full h-full flex flex-col  justify-center px-8 md:py-24 py-12 gap-7 min-h-[60vh]">
        <SecHeading
          divStyle={
            "flex flex-col items-center text-center max-w-[280px] mx-auto "
          }
          subheading={"Upcoming Events"}
          mainheading={"Join Our Community"}
          subStyle={"text-[2rem] md:text-[2.4rem]"}
          mainStyle={"text-[2rem] text-[#fff] md:text-[2.7rem]"}
        />
        <div className="upcomingEvts_preview flex flex-col gap-6 md:gap-0 ">
          {evtPreviews.map((singlePreview) => (
            <div
              key={singlePreview.name}
              className="singleUpcoming  flex flex-col items-center  p-2 gap-2  md:flex-row md:border-b md:border-[#ffffff85] md:gap-8"
            >
              <div className="bg-[#f7f7f7]  px-6 py-2  flex-col items-center justify-center text-[1.4rem] gap-0 text-[var(--main-color)] hidden md:flex rounded-md capitalize">
                <p className="font-bold">{singlePreview.day}</p>
                <p className="font-semibold">
                  {singlePreview.month.slice(0, 3)}
                </p>
              </div>
              <div className="border md:border-none border-[#ffffff85] max-w-[300px] md:max-w-full md:w-full grid grid-cols-1 md:grid-cols-3 place-items-start md:place-items-start  gap-3 px-8 py-8 md:p-0 text-white rounded-md relative pt-12 md:pt-0 md:gap-8">
                <div className="bg-[#f7f7f7] px-8 py-2 flex flex-col items-center justify-center text-[1rem] gap-0 text-[var(--main-color)] absolute md:hidden top-[-20px] left-0 right-0 mx-auto max-w-[60px] rounded-md capitalize">
                  <p className="font-bold">{singlePreview.day}</p>
                  <p className="font-semibold">
                    {singlePreview.month.slice(0, 3)}
                  </p>
                </div>
                <p className="evt_name font-semibold max-w-[150px] md:max-w-full text-[1.3rem] md:text-[1.3rem] capitalize">
                  {singlePreview.name}
                </p>
                <p className="evt_time flex items-center text-[1.3rem] md:text-[1.3rem] gap-2 font-semibold">
                  {" "}
                  <GiClockwork className="text-[1.4rem]" /> {singlePreview.time}
                </p>
                <hr className="w-[100%] bg-[#ffffff85] h-[1px] border-none md:hidden" />
                <p className="evt_loc flex items-center text-[1.3rem] md:text-[1.3rem] gap-2 font-semibold">
                  {" "}
                  <GrMapLocation className="text-[1.3rem] " />{" "}
                  {singlePreview.location}
                </p>
                {/* <button className="uppercase bg-[var(--main-color)] px-4 text-xs py-3 rounded-sm font-semibold text-[1rem] hover:bg-white hover:text-[var(--main-color)] ease-in-out duration-300">
                  read more
                </button> */}
              </div>
            </div>
          ))}
        </div>
        <Link
          to={"/events"}
          className="text-white max-w-[240px] mx-auto text-center px-8 text-[1.1rem] bg-[var(--main-color)] flex items-center justify-center gap-1 hover:gap-3 hover:bg-[var(--second-color)] ease-in-out duration-300 py-3 rounded-sm"
        >
          {" "}
          See All Events <RxDoubleArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default UpcomingEvt;
