import { useState } from "react";
import { HomBlog } from "../components/common/HomBlog";
import { Link } from "react-router-dom";
import PageHead from "../components/common/PageHead";

const NewsBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  //Get Current Posts:
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = HomBlog.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(HomBlog.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PageHead
        pageName={" Blog"}
        prevPage={"Home"}
        currentPage={"Blog"}
        refLink={"/"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1719493791/homchapel/large-group-fans-with-arms-raised-having-fun-music-concert-night_b6lq3z_hnyyry.webp')]"
        }
        pageIntro={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, reiciendis obcaecati placeat nihil cum nulla illo illum deserunt labore optio."
        }
      />
      <section className="news py-8 px-4">
        <div className="news_intro flex flex-col items-center gap-3 mb-6">
          <h2 className="text-black  text-center font-semibold text-3xl uppercase dark:text-white">
            news & announcements
          </h2>
          <p className="text-black  max-w-[600px] text-center md:text-[1.2rem] dark:text-[var(--dark-white)]">
            Discover the latest news, information & announcements from{" "}
            <b className="capitalize">house of mystery chapel international</b>
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8  justify-center">
          <div className="newsSecImgBox  w-[38%] rounded-md overflow-hidden">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1733017721/homchapel/DSC_5010_lh1wfh.webp"
              alt="news"
              className="hidden md:block h-full object-cover w-full rounded-md hover:scale-110 ease-in-out duration-700 hover:opacity-60 "
            />
          </div>
          <div className="allBlogs flex flex-col items-center md:items-start gap-5 ">
            <ul className="pagination  flex flex-row items-center  gap-2 ">
              {pageNumbers.map((number) => (
                <Link
                  to={"#"}
                  className={` bg-[#c7a396] min-w-[30px] max-w-[30px] h-[30px] flex items-center justify-center hover:bg-[#f26837] ease-in-out duration-300  text-gray-200  font-semibold rounded-sm ${
                    currentPage === number ? "dark:bg-[#f26837] " : ""
                  }`}
                  onClick={() => paginate(number)}
                  key={number}
                >
                  <li>{number}</li>
                </Link>
              ))}
            </ul>
            {currentPosts.map((singleBlog) => {
              return (
                <div
                  className="singleBlog  max-w-[500px] flex flex-col md:flex-row gap-3 md:items-center m-auto"
                  key={singleBlog.id}
                >
                  <div className="blogImg_box overflow-hidden h-full aspect-[4/3] md:aspect-[7/6]  md:w-[45%]">
                    <img
                      src={singleBlog.image_url}
                      alt="church"
                      className="hover:scale-110 ease-in-out duration-700 h-full w-full "
                    />
                  </div>

                  <div className="blog_text flex flex-col gap-3 items-start  md:w-[55%]">
                    <p className=" text-sm capitalize text-[#f26837]  bg-[#f269375d]  px-2 py-[.1rem] rounded-sm font-semibold">
                      {singleBlog.category}
                    </p>
                    <p className="text-black  text-base md:text-sm font-semibold capitalize dark:text-white">
                      {singleBlog.title}
                    </p>
                    <p className="text-black  text-[.8rem] font-[400] md:text-xs dark:text-[var(--dark-white)]">
                      {singleBlog.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsBlog;
