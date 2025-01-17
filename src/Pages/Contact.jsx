import { Link } from "react-router-dom";
import PageHead from "../components/common/PageHead";
import SecHeading from "../components/common/SecHeading";
import { FiPhone } from "react-icons/fi";
import { PiMapPin } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import Form from "../components/common/Form";
import "../styles/Contact.css";

const contactItems = [
  {
    icon: <FiPhone className="text-[var(--main-color)]" />,
    refName: "0244496968",
    ref: "tel:233593552731",
  },
  {
    icon: <PiMapPin className="text-[var(--main-color)]" />,
    refName: "Tatop Weija, Accra",
    ref: "https://www.google.com/maps/place/House+of+Mystery+Chapel+International/@5.5535899,-0.3183499,16z/data=!4m6!3m5!1s0xfdfbdf3d2cd56d5:0x288d247b8da7f24b!8m2!3d5.5538031!4d-0.3182464!16s%2Fg%2F11vj4r9b3b?entry=ttu",
  },
  {
    icon: <TfiEmail className="text-[var(--main-color)]" />,
    refName: "homchapel@gmail.com",
    ref: "mailto:homchapel@gmail.com",
  },
  {
    icon: <FaWhatsapp className="text-[var(--main-color)]" />,
    refName: "WhatsApp",
    ref: "https://wa.me/233244496968",
  },
  {
    icon: <FaFacebookF className="text-[var(--main-color)]" />,
    refName: "Facebook",
    ref: "https://web.facebook.com/homchapel",
  },
  {
    icon: <FaTiktok className="text-[var(--main-color)]" />,
    refName: "TikTok",
    ref: "https://www.tiktok.com/@homchapel",
  },
];

const Contact = () => {
  return (
    <section className="contact_page">
      <PageHead
        pageName={"Contact"}
        prevPage={"Home"}
        currentPage={"Contact"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1726050967/homchapel/IMG-20240911-WA0005_ot0c2d.webp')] bg-center"
        }
        pageIntro={
          "We appreciate you for visiting us virtually, don’t hold back on anything you want to share with us or ask. Kindly call us or even send us a direct message using the form below and we will be glad to get in touch."
        }
      />
      <div className="contact_column py-8 px-4 flex flex-col gap-9 md:flex-row md:items-center md:justify-center md:gap-4 md:min-h-[60vh]">
        <div className="column_text flex flex-col items-start gap-3 md:w-3/6 lg:w-3/6 ">
          <SecHeading
            subheading={"where to find us"}
            mainheading={"Contact Us"}
            subStyle={"text-[2rem] md:text-[2.7rem]"}
            mainStyle={
              "text-[1.7rem] text-[#062e36] md:text-[3.3rem] max-w-[760px] capitalize"
            }
          />
          <p className=" text-[#062e36] md:leading-6 max-w-[500px] dark:text-[var(--dark-white)]">
            No matter what stage, age, or season you find yourself in, HOM
            Chapel is for you! We invite you to come just as you are and be part
            of this community of people who are striving together to discover
            God&apos;s purpose and plan for their lives!
          </p>
          <div className="contacts flex flex-row justify-around w-full max-w-[500px] gap-12 ">
            <div className="flex flex-col items-start gap-2    w-3/6">
              {contactItems.slice(0, 3).map((contactItem) => (
                <Link
                  to={contactItem.ref}
                  key={contactItem.refName}
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-[#646464] tracking-wide hover:text-[#000] dark:hover:text-white ease-in duration-200 hover:underline hover:font-semibold"
                >
                  {contactItem.icon}
                  {contactItem.refName}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-2   w-3/6">
              {contactItems.slice(3).map((contactItem) => (
                <Link
                  to={contactItem.ref}
                  key={contactItem.refName}
                  target="_blank"
                  className="flex items-center justify-center gap-2 text-[#646464] tracking-wide hover:text-[#000] dark:hover:text-white ease-in duration-200 hover:underline hover:font-semibold"
                >
                  {contactItem.icon}
                  {contactItem.refName}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Form
          formStyle={
            "max-w-[500px] md:max-w-[600px] lg:max-w-[500px] md:w-3/6 lg:w-3/6 "
          }
          inputStyle={"dark:text-white text-black"}
          extraInput={
            <input
              type="text"
              required
              placeholder="E-mail"
              name="sender_email"
              className="dark:text-white text-black"
            />
          }
        />
      </div>
      <div className="loc_map  min-h-[40vh] max-h-[50vh] lg:min-h-[60vh] ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15884.355996832388!2d-0.33670032534401534!3d5.553824171056825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sHouse%20of%20Mystery%20Chapel%20International!5e0!3m2!1sen!2sus!4v1723768237244!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full min-h-[40vh] max-h-[50vh] lg:min-h-[60vh]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
