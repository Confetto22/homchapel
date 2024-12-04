import { useState } from "react";
// import { PaystackButton } from "react-paystack";
import { IoIosPhonePortrait } from "react-icons/io";
import { BiMessage } from "react-icons/bi";
import { Link } from "react-router-dom";
import PageHead from "../components/common/PageHead";

const Give = () => {
  const [giveType, setGiveType] = useState("");
  giveType === "ussd"
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <section className="give_page">
      <PageHead
        pageName={"Give"}
        prevPage={"Home"}
        currentPage={"Give"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1723215475/homchapel/pexels-jibarofoto-2014775_bles2s_gsaw33_fq0oea.webp')]"
        }
        pageIntro={
          "HOM Chapel is filled with citizens with a heart for the church. We believe in the biblical principle of tithing and witness God multiplying the generosity of our church family on a weekly basis. It's because of your generosity that we can continue to grow and make an impact in our community together!"
        }
      />

      <div className="give_cards mx-8 flex flex-col md:flex-row items-center justify-center  gap-6 md:gap-8 p-2 min-h-[60vh]">
        <div className="give_card min-h-[18rem] rounded-sm justify-center m-auto md:m-0  ease-in-out duration-300 max-w-[350px] p-4 gap-2 flex flex-col items-center">
          <IoIosPhonePortrait className="text-6xl text-[var(--main-color)]" />
          <p className="text-xl uppercase font-semibold text-black dark:text-white">
            give online
          </p>
          <p className="text-center text-md text-black dark:text-white font-light">
            Whether you want to setup recurring giving or simply give a one-time
            gift, online giving is quick and easy to setup.
          </p>
          <Link to={"/give-online"}>
            <button className="bg-transparent  ease-in-out duration-300 border border-[var(--main-color)]  text-[var(--main-color)] hover:text-[#fff] uppercase py-2 px-12 font-semibold tracking-wider text-sm rounded-sm  hover:bg-[var(--main-color)]">
              give
            </button>
          </Link>
        </div>
        <div className="give_card min-h-[18rem] rounded-sm justify-center m-auto md:m-0   ease-in-out duration-300 max-w-[350px] p-4 gap-2 flex flex-col items-center">
          <BiMessage className="text-6xl text-[var(--main-color)]" />
          <p className="text-xl uppercase font-semibold text-black dark:text-white">
            ussd
          </p>
          <p className="text-center text-md  font-light text-black dark:text-white">
            You can easily give to HOM Chapel through our shortcode. Simply
            click on the button below and follow the steps to complete payment.
          </p>
          <button
            className="bg-transparent  ease-in-out duration-300 border border-[var(--main-color)]  text-[var(--main-color)] hover:text-[#fff] uppercase py-2 px-12 font-semibold tracking-wider text-sm rounded-sm  hover:bg-[var(--main-color)]"
            onClick={() => setGiveType("ussd")}
          >
            give
          </button>
        </div>
      </div>

      <div
        className={`give_modal   bg-[#000000c2] fixed w-full h-full top-0 flex flex-col items-center justify-center px-4 ${
          giveType === "ussd" ? "block" : "hidden"
        }`}
        onClick={(e) =>
          e.target.classList.contains("give_modal") ? setGiveType("") : null
        }
      >
        <div className="giving_box  max-w-[500px] mx-auto my-auto flex flex-col gap-4 bg-[var(--main-color)] px-4 py-8  relative pt-[4rem] rounded-sm max-h-[90vh]">
          <h4
            className="text-gray-300 text-[2.5rem]  absolute w-[30px] h-[30px] flex items-center justify-center rounded-sm top-3 right-3 cursor-pointer  ease-in-out duration-300 hover:rotate-180 hover:opacity-80 hover:text-black p-2"
            onClick={() => setGiveType("")}
          >
            &times;
          </h4>

          {giveType === "ussd" && (
            <div>
              <h2 className="capitalize text-white text-xl text-center font-semibold ">
                Dial <b className="underline">*800*80*547#</b> and follow the
                following commands to give via USSD
              </h2>
              <ul className="propmt_list  mt-5 flex flex-col items-center justify-center gap-3 font-semibold capitalize text-[1rem] text-center text-gray-300">
                <li>Select option 1 ;</li>
                <li>select option 1 to give ;</li>
                <li>select the category you would like to give in ;</li>
                <li>Enter amount you would like to give ;</li>
                <li>wait for confirmation prompt ;</li>
                <li>THANK YOU FOR YOUR GENEROUS HEART, GOD BLESS YOU!</li>
              </ul>
            </div>
          )}
          <p className="font-['Courgette'] capitalize text-center text-white font-bold text-xl  mt-8">
            House Of Mystery chapel international <br /> building spiritual
            colossal...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Give;
