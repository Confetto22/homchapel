import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";
import "../../styles/Menu.css";
import { IoClose } from "react-icons/io5";
import DonateBt from "./DonateBt";
// import { IoMdClose } from "react-icons/io";

const navLinks = [
  {
    refName: "Home",
    ref: "/",
  },
  {
    refName: "About",
    ref: "/about-us",
  },
  {
    refName: "Contact",
    ref: "/contact",
  },

  {
    refName: "Events",
    ref: "/events",
  },
  // {
  //   refName: "Gallery",
  //   ref: "/gallery",
  // },
  {
    refName: "Prayer",
    ref: "/prayer-wall",
  },
];

const Navbar = () => {
  const pageLocation = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [activePage, setActivePage] = useState(pageLocation.pathname);
  // const pageLocation = useLocation();
  // console.log(pageLocation.pathname);
  const menuButton = menuOpen ? <IoClose /> : <GiHamburgerMenu />;

  return (
    <>
      <nav
        className={`navbar flex items-center justify-between   top-0 w-full py-4 px-5 gap-5 md:gap-0 md:px-8 z-[100] border-none ${
          menuOpen ? "fixed" : "absolute"
        }`}
      >
        <Link to={"/"} className="hover:opacity-60 ease-in-out duration-300">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265448/homchapel/homlogo_ucmyp7.webp"
            alt="church logo"
            className="w-[150px] md:w-[200px]"
          />
        </Link>
        <menu className=" items-center gap-5 text-[1.2rem] font-semibold hidden md:flex text-white">
          {navLinks.map((navLink) => (
            <Link
              to={navLink.ref}
              key={navLink.refName}
              // onClick={() => setActivePage(navLink.refName)}
              className={`ease-in-out duration-300 hover:text-[var(--second-color)] hover:underline underline-offset-4 hover:opacity-80 ${
                navLink.ref === pageLocation.pathname
                  ? "text-[var(--second-color)] underline underline-offset-4"
                  : ""
              }`}
            >
              {navLink.refName}
            </Link>
          ))}
        </menu>
        <div className="flex items-center gap-2">
          <button
            className={`text-white md:hidden flex flex-col justify-end text-[2rem]  menuBt ease-in-out `}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu button"
          >
            {menuButton}
          </button>
          <DonateBt />
        </div>
      </nav>
      <aside
        className={`menu flex flex-col items-start  gap-3 justify-start md:hidden  z-[10] w-full min-h-[40vh]  ${
          menuOpen ? "visible fixed" : "absolute"
        }`}
      >
        {/* <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265448/homchapel/homlogo_ucmyp7.webp"
          alt="church logo"
          className="w-[150px] md:w-[200px]"
        />
        <button
          type="button"
          className="cursor-pointer text-white  bg-[#8f8f8f] absolute top-3 right-5 w-[40px] h-[40px] rounded-sm flex items-center justify-center  p-1 hover:bg-white hover:text-[#8f8f8f] ease-in-out duration-300"
          aria-label="close menu"
          onClick={() => setMenuOpen(false)}
        >
          <IoClose className="text-[3rem]" />
        </button> */}
        <ul className="menuwindow_list mt-[100px]  flex flex-col ite  gap-0 text-stone-300 w-full">
          {navLinks.map((singleMenuItem) => {
            return (
              <Link
                key={singleMenuItem.refName}
                to={singleMenuItem.ref}
                onClick={() => setMenuOpen(false)}
                className="menuListItem flex flex-row items-center justify-center gap-[3px] hover:bg-stone-600 w-full py-2"
              >
                {singleMenuItem.refName}
                <HiArrowLongRight />
              </Link>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
