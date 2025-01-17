import { useRef } from "react";
import PageHead from "../components/common/PageHead";
import "../styles/PrayerWall.css";
import { PiHandsPrayingLight } from "react-icons/pi";
import emailjs from "@emailjs/browser";

const PrayerWall = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_41a5tn4", "template_533oxan", form.current, {
        publicKey: "prkoPZEGOTPZ_ENVb",
      })
      .then(
        () => {
          alert("successfully sent");
        },
        (error) => {
          alert("FAILED...");
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <section className="prayer_wall">
      <PageHead
        pageName={"Prayer Wall"}
        prevPage={"Home"}
        currentPage={"Prayer Wall"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737075843/homchapel/DSC_0301_kupbpf_c_crop_w_5333_h_3000_ar_16_9_b4ywgc.webp')] bg-top"
        }
        pageIntro={
          "Welcome to our Prayer Wall! Here, you can share your prayer requests and join our community in lifting each other up in faith. "
        }
      />

      <div className="prayerWall_content p-8 ">
        <p className="text-[1rem] dark:text-gray-300 capitalize max-w-[600px] mx-auto md:leading-7 text-center md:text-[1.2rem]">
          Whether you&apos;re seeking support, healing, or guidance, we invite
          you to submit your requests and let us pray together. Your prayers
          matter, and we&apos;re here to stand with you in hope and love.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="prayer_form  max-w-[600px]  px-4 py-8   my-7 mx-auto rounded-sm flex  flex-col justify-center gap-6"
          autoComplete="off"
        >
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1717265448/homchapel/homlogo_ucmyp7.webp"
            alt="church logo"
            className="w-[270px] mx-auto"
          />

          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1725032609/homchapel/please_ktjvy0.png"
            alt="prayer"
            className="w-[70px]   mx-auto  "
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder=" Name"
              name="request_sender"

              // className={inputStyle}
            />
            <input
              type="text"
              required
              name="sender_number"
              placeholder="Phone No."
              // className={inputStyle}
            />
            <input
              type="email"
              // required
              name="sender_email"
              placeholder="E-Mail (optional)"
              // className={inputStyle}
            />
            <input
              type="text"
              // required
              name="prayer_topic"
              placeholder="Prayer Topic (optional)"
              // className={inputStyle}
            />
            <textarea
              name="prayer_details"
              id="message form_textarea"
              placeholder="Prayer Request"
              className=" md:col-span-2"
            ></textarea>
          </div>
          <button className="formBt bg-[var(--second-color)] py-3 tracking-wide rounded-sm uppercase font-semibold hover:bg-[var(--main-color)] hover:text-white ease-in-out duration-300 col-span-2 w-[45%] mx-auto text-sm hover:w-full">
            submit
          </button>
        </form>
      </div>
      <div className="prayerwall_intro bg-[url('https://img.freepik.com/free-photo/spirituality-religion-hands-folded-prayer-holy-bible-church-concept-faith_1150-12946.jpg?t=st=1725031672~exp=1725035272~hmac=d68e333cc6684e93332ecc5a33b00d462db5fdebb5249f6b0ef827438a2d16d2&w=740')] bg-center bg-cover ">
        <div className="intro_cover bg-[#000000be] w-full h-full flex flex-col items-center justify-center min-h-[30vh] gap-5 py-12 px-5">
          <q className="capitalize font-semibold text-[var(--second-color)] text-[1.4rem] md:text-[1.6rem] tracking-wider max-w-[600px] text-center">
            then he spake a parable unto them to this end, that men ought always
            to pray, and not to faint!{" "}
          </q>
          <p className="font-bold text-[var(--main-color)] text-[1.5rem] md:text-[1.8rem]">
            Luke 18:1 (KJV)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrayerWall;
