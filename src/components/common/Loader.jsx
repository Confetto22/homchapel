import ClipLoader from "react-spinners/ClipLoader";
const Loader = () => {
  return (
    <ClipLoader
      color={"#aaaa"}
      loading={true}
      //   cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
