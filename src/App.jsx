import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import About from "./Pages/About";
import BackTop from "./components/common/backTop/BackTop";
import Widget from "./components/common/Widget";
import NewHere from "./Pages/NewHere";
import Contact from "./Pages/Contact";
import Events from "./Pages/Events";
import { useEffect, useLayoutEffect, useState } from "react";
import NewsBlog from "./Pages/NewsBlog";
import Gallery from "./Pages/Gallery";
import { TbMoonStars } from "react-icons/tb";
import { IoSunnyOutline } from "react-icons/io5";
import Give from "./Pages/Give";
import PrayerWall from "./Pages/PrayerWall";
import OnlineGive from "./Pages/OnlineGive";
// import Give from "./Pages/Give";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  // const location = useLocation();

  const [visitAd, setVisitAd] = useState(false);
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleAdVisibility = () => {
    setVisitAd(true);
    location.pathname === "/new-here" ? setVisitAd(false) : null;
  };
  useEffect(handleAdVisibility, []);

  return (
    <section className="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1729595283/homchapel/rb_119211_excoa6.png')]  bg-contain bg-center bg-repeat ease-in-out duration-300 dark:bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1729597210/homchapel/hand-drawn-minimalist-background_znfifr.png')]">
      <div className="page_cover dark:bg-[#000000de] bg-[#ebe7e72a] w-full h-full">
        <Wrapper>
          <Analytics />
          <SpeedInsights />
          <Navbar />

          <div
            className={`visit_ad bg-[#662a14] w-full font-['Quicksand']   fixed flex flex-row items-center justify-center gap-5 z-[1000] px-3 py-4 ease-in-out duration-500  ${
              visitAd ? "top-0 delay-1000" : "top-[-200px]"
            }`}
          >
            <div className=" w-[95%] flex flex-col gap-1 items-start md:flex-row md:items-center md:justify-between">
              <p className="text-gray-100 text-left  font-semibold text-sm md:text-base md:w-[80%]  ">
                New to HOM Chapel? Find out all key information about us here!
              </p>
              <Link
                to={"/new-here"}
                className="bg-[var(--second-color)]  rounded-sm text-gray-100 text-center py-[.4rem] px-5 hover:bg-gray-100 hover:text-[var(--secondary-color)] ease-in-out duration-300 font-semibold"
                onClick={() => setVisitAd(false)}
              >
                New Here
              </Link>
            </div>
            <h5
              className=" text-gray-300 font-semibold text-[1.6rem] w-[30px] h-[30px]  flex items-center justify-center cursor-pointer hover:bg-red-500 ease-in-out duration-300 rounded-sm"
              onClick={() => setVisitAd(false)}
            >
              &times;
            </h5>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/new-here" element={<NewHere />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blog" element={<NewsBlog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/give" element={<Give />} />
            <Route path="/prayer-wall" element={<PrayerWall />} />
            <Route path="/give-online" element={<OnlineGive />} />
          </Routes>
          <div className="widgets">
            {/* <Donate /> */}
            <button
              onClick={handleThemeSwitch}
              className={`${
                theme === "dark"
                  ? "bg-white text-[#1f1f1f]"
                  : "bg-[#1f1f1f] text-white"
              } w-[60px] h-[60px] rounded-full flex items-center justify-center text-[1.7rem] ease-in-out duration-500 hover:rotate-[360deg]`}
            >
              {" "}
              {theme === "dark" ? <IoSunnyOutline /> : <TbMoonStars />}{" "}
            </button>
            <Widget />
          </div>

          <div className="widgets_right">
            <BackTop />
          </div>
          <Footer />
        </Wrapper>
      </div>
    </section>
  );
}

export default App;
