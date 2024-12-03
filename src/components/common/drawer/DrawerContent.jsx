import { LuClock7 } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import { RxCalendar } from "react-icons/rx";

const DrawerContent = ({ currentItem }) => {
  return (
    <>
      <h5 className="inline-flex items-center mb-4 font-semibold text-gray-500 dark:text-gray-100 capitalize text-xl">
        <svg
          className="w-6 h-6 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        {currentItem?.name ? currentItem?.name : currentItem?.title}
      </h5>
      <p className=" drawer_detail mb-6 text-sm text-gray-500 dark:text-gray-300">
        {currentItem?.brief}
      </p>
      <div className="drawerContentDate capitalize  flex flex-col gap-2 ">
        <p>
          <RxCalendar className="eventInfo_icon" />
          Date: {currentItem?.day} {currentItem?.month},{currentItem?.year}
        </p>
        <p>
          <TfiLocationPin className="eventInfo_icon" />
          Location: {currentItem?.location}
        </p>
        <p>
          <LuClock7 className="eventInfo_icon" />
          Time: {currentItem?.time}
        </p>
      </div>
    </>
  );
};

export default DrawerContent;
