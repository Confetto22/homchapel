import { useState } from "react";
import {
  endMonth,
  healingProphetic,
  sundayservice,
  warnight,
} from "../components/common/GalleryImages";
import PageHead from "../components/common/PageHead";

export default function Gallery() {
  const [serviceType, setServiceType] = useState(sundayservice);

  // function serviceClick(serviceName) {
  //   setServiceType(serviceName);

  // }

  return (
    <section className="gallery_page">
      <PageHead
        pageName={"Gallery"}
        prevPage={"Home"}
        currentPage={"Gallery"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1719493791/homchapel/large-group-fans-with-arms-raised-having-fun-music-concert-night_b6lq3z_hnyyry.webp')]"
        }
        pageIntro={""}
      />

      <div className="service_filters dark:text-white  flex items-center justify-center gap-4  mt-6 py-2 px-4 flex-wrap text-sm md:text-[1rem] font-semibold tracking-wide">
        <button
          onClick={() => setServiceType(sundayservice)}
          className={`${serviceType === sundayservice ? "activeButton" : ""}`}
        >
          Sunday service
        </button>{" "}
        <span>{"|"}</span>
        <button
          onClick={() => setServiceType(warnight)}
          className={`${serviceType === warnight ? "activeButton" : ""}`}
        >
          war Night
        </button>{" "}
        <span>{"|"}</span>
        <button
          onClick={() => setServiceType(endMonth)}
          className={`${serviceType === endMonth ? "activeButton" : ""}`}
        >
          It Will End In Glory
        </button>{" "}
        <span>{"|"}</span>
        <button
          onClick={() => setServiceType(healingProphetic)}
          className={`${
            serviceType === healingProphetic ? "activeButton" : ""
          }`}
        >
          Healing & Prophetic
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2 gallery_images px-4 my-8 ">
        {Object.keys(serviceType).map((column) => (
          <div className="column grid gap-2 " key={column}>
            {serviceType[column].map((image, index) => (
              <div key={index}>
                <img
                  className="h-auto max-w-full rounded-lg hover:opacity-80 hover:scale-105 ease-in-out duration-300"
                  src={`${image}`}
                  alt={`${column} image ${index + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
