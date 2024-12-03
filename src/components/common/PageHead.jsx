import { Link } from "react-router-dom";

const PageHead = ({
  pageName,
  prevPage,
  currentPage,
  refLink,
  bgPic,
  pageIntro,
}) => {
  return (
    <div className={`page_head min-h-[60vh] ${bgPic} bg-cover bg-center`}>
      <div className="cover bg-[#000000b0] w-full h-full flex flex-col items-center justify-center px-8 md:py-24 py-16 gap-0 min-h-[60vh]">
        <h2 className="page_name text-white text-[2.3rem] md:text-[3.5rem] ">
          {pageName}
        </h2>
        <p className="page_tracker tracking-wide text-[2.3rem] md:text-[3.8rem]">
          <Link
            to={refLink}
            className=" hover:text-[var(--main-color)] ease-in-out duration-300 font-semibold"
          >
            {prevPage}
          </Link>
          {" / "}
          {currentPage}
        </p>
        <p className="text-gray-400 max-w-[450px] md:max-w-[600px] text-center text-sm md:text-base">
          {pageIntro}
        </p>
      </div>
    </div>
  );
};

export default PageHead;
