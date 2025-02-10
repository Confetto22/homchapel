import { Link } from "react-router-dom";
import { LiaTelegram } from "react-icons/lia";
// import { FaInstagram } from "react-icons/fa";

import "../../styles/Footer.css";
import Form from "./Form";
import { churchGoogleMaps } from "../../Pages/Events";

const footerSocials = [
  {
    icon: <i className="fa-brands fa-facebook-f"></i>,
    ref: "https://web.facebook.com/homchapel",
    refName: "facebook",
  },
  {
    icon: <i className="fa-brands fa-tiktok"></i>,
    ref: "https://www.tiktok.com/@homchapel",
    refName: "tiktok",
  },
  {
    icon: <i className="fa-brands fa-youtube"></i>,
    ref: "https://www.youtube.com/@houseofmysterychapelintern2095",
    refName: "youtube",
  },
  {
    icon: <i className="fa-brands fa-instagram"></i>,
    ref: "https://www.instagram.com/homchapel/",
    refName: "Instagram",
  },
  {
    icon: <LiaTelegram />,
    ref: "https://t.me/HoMChapel",
    refName: "telegram",
  },
];

const footerLinks = [
  {
    name: "Home",
    ref: "/",
    category: "quicklink",
  },
  {
    name: "Contact",
    ref: "/contact",
    category: "quicklink",
  },
  {
    name: "Events",
    ref: "/events",
    category: "quicklink",
  },
  {
    name: "About",
    ref: "/about-us",
    category: "quicklink",
  },
  {
    name: "New Here?",
    ref: "/new-here",
    category: "resource",
  },
  {
    name: "Give",
    ref: "/give",
    category: "resource",
  },
  // {
  //   name: "Gallery",
  //   ref: "#",
  //   category: "resource",
  // },
  {
    name: "Prayer",
    ref: "/prayer-wall",
    category: "resource",
  },
  {
    name: "News & Updates",
    ref: "/blog",
    category: "resource",
  },
];

const quickLinks = footerLinks.filter(
  (quickLink) => quickLink.category === "quicklink"
);
const resources = footerLinks.filter(
  (resource) => resource.category === "resource"
);

const Footer = () => {
  return (
    <footer className="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1733016490/homchapel/DSC_4237_bhpc9u.webp')]   bg-cover bg-center min-h-[70vh]">
      <div className="footer_cover bg-[#000000cd] p-4 pt-12 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="footer_columns grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-24 max-w-[600px]  md:max-w-full">
          <div className="max-w-[300px] flex flex-col gap-3">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265448/homchapel/homlogo_ucmyp7.webp"
              alt="church logo"
              className="footer_logo w-[200px] mb-4"
            />

            <p className="text-sm text-[#a3a2a2]">
              Thank you for visiting us online. We invite you to join us in
              worship, fellowship, and service as we grow together in faith &
              love. God bless you!
            </p>
            <div className="text-[#a3a2a2] text-[1rem] flex flex-col gap-1">
              <Link
                to={churchGoogleMaps}
                target="_blank"
                className="hover:text-[var(--second-color)] ease-in-out duration-200 hover:underline underline-offset-2"
              >
                Tatop Weija, Accra
              </Link>
              <p>
                Phone :{" "}
                <Link
                  to={"tel:233593552731"}
                  className="hover:text-[var(--second-color)] ease-in-out duration-200 hover:underline underline-offset-2"
                >
                  0593552731
                </Link>
              </p>
            </div>
            <div className="footerSocials flex items-center gap-2 mt-2">
              {footerSocials.map((social) => (
                // <Link
                //   to={"#"}
                //   key={social.refName}
                //   className="bg-transparent border border-[#a3a2a2] rounded-full text-white flex items-center justify-center hover:text-[var(--second-color)]  ease-in-out duration-200"
                //   aria-label={`${social.refName} link`}
                // >
                //   <button
                //     className="w-[40px] h-[40px] flex items-center justify-center "
                //     aria-label={`${social.refName} link`}
                //   >
                //     {social.icon}
                //   </button>
                // </Link>
                <Link
                  to={social.ref}
                  target="_blank"
                  key={social.refName}
                  className="bg-transparent border border-[#a3a2a2] rounded-full text-white flex items-center justify-center hover:text-[var(--second-color)]  ease-in-out duration-200 w-[40px] h-[40px]"
                  aria-label={`${social.refName} link`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="allFooterLinks grid gap-6 grid-cols-2 md:grid-cols-2 max-w-[300px]">
            <ul className="footerLinks">
              {quickLinks.map((singleQuickLink) => (
                <li key={singleQuickLink.name}>
                  <Link to={singleQuickLink.ref}>{singleQuickLink.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="footerLinks">
              {resources.map((singleResource) => (
                <li key={singleResource.name}>
                  <Link to={singleResource.ref}>{singleResource.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Form />
        </div>

        <p className="copyright text-center mt-5 text-[#a3a2a2] capitalize">
          developed by{" "}
          <Link
            to={"https://github.com/Confetto22"}
            target="_blank"
            className="text-white underline font-semibold text-[1.1rem]"
          >
            Confetto&copy;
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
