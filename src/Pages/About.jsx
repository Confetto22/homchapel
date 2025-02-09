// import CustomButton from "../components/common/CustomButton";
import PageHead from "../components/common/PageHead";
import SecHeading from "../components/common/SecHeading";
import ValuesList from "../components/ValuesList";
import "../styles/About.css";
import { motion } from "framer-motion";

const decreeStyling = ["text-gray-200 md:text-[#000] capitalize"];

const About = () => {
  return (
    <section className="about_page">
      <PageHead
        pageName={"About"}
        prevPage={"Home"}
        currentPage={"About"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1724788161/homchapel/IMG-20240827-WA0052_srabqj.webp')]"
        }
        pageIntro={
          "Step into our story of faith, community, and purpose. Discover who we are, what we believe, and how we spread love and hope. Join us on this journey of faith and service!"
        }
      />
      <ValuesList />
      <div className="about_welcome p-8 py-12 flex flex-col gap-4 md:flex-row md:items-center md:gap-8 max-w-[600px] md:max-w-full mx-auto">
        <motion.img
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
            // duration: 4,
          }}
          viewport={{ once: true }}
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054656/homchapel/DSC_0651_vl9kpf.webp"
          alt="welcome picture"
          className="w-full md:w-[45%]"
        />
        <motion.div
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
            // duration: 4,
          }}
          viewport={{ once: true }}
          className="welcomeText flex flex-col items-start gap-4 md:w-3/6 md:pr-12"
        >
          <SecHeading
            subheading={"Welcome to"}
            mainheading={"House Of Mystery"}
            subStyle={"text-[1.7rem] md:text-[2.4rem]"}
            mainStyle={
              "text-[2.3rem] text-[#062e36] md:text-[2.7rem] max-w-[760px] md:leading-10"
            }
          />
          <p className="text-[#062e36]  leading-6 dark:text-[var(--dark-white)]">
            Shalom child of God, this is HOM chapel, a kingdom where faith,
            community, and love come together. We stand as a beacon of hope, a
            sanctuary of faith, and a community of love. Our roots run deep,
            tracing back to 2016, where God through Apostle Dr. Cloudio planted
            the seeds of what has blossomed into a vibrant congregation today.
          </p>
          <p className="text-[#062e36]  leading-6 dark:text-[var(--dark-white)]">
            We welcome all with open arms, embracing diversity and unity in our
            shared journey of faith. Discover our rich history, vibrant mission,
            and dedicated team that make our church a home for all. Let&apos;s
            journey together in faith and fellowship!
          </p>
        </motion.div>
      </div>
      <section className="our_story bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737054651/homchapel/DSC_0158_rqd3kl.webp')] min-h-[60vh] bg-center bg-cover md:min-h-[80vh]">
        <div className="story_cover bg-[#000000be] w-full h-full flex items-center justify-center min-h-[60vh] py-12 md:min-h-[80vh]">
          <div className="history_text flex flex-col items-center justify-center gap-8 py-8 px-4  text-center md:px-0 md:max-w-[85%]">
            <h2 className="text-3xl font-bold border-b border-inherit uppercase text-gray-100">
              Our success story
            </h2>
            <div className="text-sm md:w-full  font-medium flex flex-col gap-6 pr-4">
              <motion.p
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                  // duration: 4,
                }}
                viewport={{ once: true }}
                className=" text-gray-300"
              >
                The LORD commissioned Dr. Cloudio in 2016 to begin this ministry
                which the Lord Christened, Maranatha Word Chapel International
                (MWCI). The church begun at Ablekuma with seven people. The
                church continued steadfastly in sharing the word, prayer and
                fasting. God’s power became imminent in every MWCI’s service and
                the church begun to grow. <br />
                The church transitioned from Ablekuma to Santa Maria where the
                church continued to blossom. God through the anointing he has
                bestowed upon His manservant manifested countless magnificent
                and incredible miracles in the lives of people who fellowshipped
                with the church. The move of God was so strong; some of those
                testimonies were so mind blowing that till today it still
                marvels dozens of people.
              </motion.p>{" "}
              <motion.p
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                  // duration: 4,
                }}
                viewport={{ once: true }}
                className=" text-gray-300"
              >
                In 2021 the Lord directed His manservant to rebrand the church
                from MWCI to House of Mystery Chapel International (HoM Chapel).
                HoM Chapel has been the hub of mysterious insight into deep
                revelations in God’s word, miracles, signs and wonders. <br />
                In 2022 we faced a very challenging time in the history of this
                church when we had to move from Santa Maria to Weija. The Head
                Pastor had to sell everything he had including his lands, cars
                and anything he could lay hands on. He sold them all to build
                this beautiful auditorium for God; the mystery temple.
              </motion.p>{" "}
              <motion.p
                initial={{ y: 70, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                  // duration: 4,
                }}
                viewport={{ once: true }}
                className=" text-gray-300"
              >
                It was moments of toil, labor and sleepless nights. But God came
                through for the ministry and gave us divine enablement to finish
                and furnish this place. Through the grace and the mercies of God
                we have grown over the years into an avalanche of startling and
                awesome group of citizens of the kingdom of God. <br />
                And guess what, God is now doing even much more greater and
                amazing things in the life of citizens, bringing about greater
                testimonies to the glory of God. There&apos;s no denying that
                this church community, is a gift from the Lord Himself. In fact,
                this church is nothing short of a miracle and we give all the
                thanks and glory to God.
              </motion.p>
            </div>
          </div>
          {/* <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722535761/homchapel/IMG_4189_bgjzoa.jpg"
          alt=""
          className="story_img hidden lg:block w-2/6 object-cover rounded-md "
        /> */}
        </div>
      </section>

      <div className="overseer p-8 py12 max-w-[500px] md:max-w-full mx-auto flex flex-col md:flex-row items-center  justify-center gap-5 md:gap-8">
        <motion.img
          initial={{ x: 70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
            // duration: 4,
          }}
          viewport={{ once: true }}
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722537865/homchapel/DADDYEXCLUSIVE2_otwhmy.jpg"
          alt="Apostle Dr. Cloudio"
          className="w-full h-full object-cover object-top aspect-[9/10] md:w-[45%]"
        />

        <motion.div
          initial={{ x: -70, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", duration: 1, stiffness: 40 },
            opacity: { duration: 2 },
            ease: "easeInOut",
            // duration: 4,
          }}
          viewport={{ once: true }}
          className="welcome_text md:w-3/6 md:pr-8 flex flex-col items-start gap-3 md:gap-6"
        >
          <SecHeading
            subheading={"message from"}
            mainheading={"Human Founder"}
            subStyle={"text-[1.7rem] md:text-[2.4rem]"}
            mainStyle={
              "text-[2.3rem] text-[#062e36] md:text-[2.7rem] max-w-[760px] md:leading-10"
            }
          />
          <p className="oversser_welcome md:max-w-[400px] text-sm leading-6 dark:text-[var(--dark-white)]">
            Hello! my name is Apostle Dr. Cloudio Tetteh. The head pastor of HoM
            Chapel... a church you are proud of, a family you are part of. I
            want to extend a warm welcome to you to our church&apos;s digital
            home, where every pixel is infused with the warmth of our
            congregation&apos;s spirit. Here, amidst the digital waves, may you
            find solace, community, and a deep connection to the divine.
            Together, let us embark on a digital pilgrimage of love, hope, faith
            and growth. Your presence enriches our online family, and together,
            we shall illuminate the digital realm with the light of our shared
            faith. Welcome, dear one, to a place where pixels and prayers unite
            to create a sacred online space.
          </p>
          <q className="md:max-w-[400px] border-l-4 border-[var(--main-color)] pl-4 font-semibold italic dark:text-white">
            The greatest enemy of man is ignorance, and not the devil. The devil
            only prides on the ignorance of a believer!
          </q>
          <p className="author font-bold text-2xl text-[var(--main-color)] dark:text-white">
            ~ Dr. Cloudio
          </p>
        </motion.div>
      </div>
      <div className="dailyDecree bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722586214/homchapel/DADDYEXCLUSIVE6_rg745z.jpg')] md:bg-none flex flex-row items-center justify-center mt-12 bg-center bg-cover">
        <div className="decree_cover bg-[#0000009f] md:bg-transparent w-full h-full flex flex-col items-center justify-center gap-8 px-7 py-36 md:py-0">
          <h2 className="text-[var(--second-color)] font-bold underline uppercase text-[4vw] md:text-[2.6vw]">
            Our Daily Decrees
          </h2>
          <div className="wonder text-center ">
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              I am a wonder to my world
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              I am for signs and I am for wonders
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              I refuse to be a wanderer to my world
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              In the name of{" "}
              <b className="dark:text-white">YESHUA HAMASHIACH</b>
            </p>
            <b className={`soBeIt ${decreeStyling} dark:text-white`}>
              SO BE IT!
            </b>
          </div>
          <div className="power text-center">
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              I have the power
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              I have the will
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              My destiny, I must fulfil
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              No other man can subdue me
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              Only God can undo me
            </p>
            <p className={`${decreeStyling} dark:text-[var(--dark-white)]`}>
              In the name of{" "}
              <b className="dark:text-white">YESHUA HAMASHIACH</b>
            </p>
            <b className={`soBeIt ${decreeStyling} dark:text-white`}>
              SO BE IT!
            </b>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1722586214/homchapel/DADDYEXCLUSIVE6_rg745z.jpg"
          alt="decrees"
          className="hidden md:block w-[90%] max-h-[600px] object-cover object-top rounded-l-md"
        />
      </div>
    </section>
  );
};

export default About;
