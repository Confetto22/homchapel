import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
  return (
    <section className=" h-screen w-full flex flex-col items-center gap-5 justify-center bg-[#FFF5D8]">
      <HashLoader
        color={"#f26837"}
        loading={true}
        //   cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {/* <p className="capitalize text-[1.5rem]">
        welcome{" "}
        <span className="loader_text uppercase font-bold text-[2rem] tracking-wide">
          hom...
        </span>
      </p> */}
    </section>
  );
};

export default Loader;
