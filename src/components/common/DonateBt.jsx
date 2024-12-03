import { Link } from "react-router-dom";

const DonateBt = () => {
  return (
    <Link
      to={"/give"}
      className="donate_widget bg-[#fac94d] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center hover:bg-[var(--second-color)] p-2"
    >
      <img
        src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1724618534/homchapel/charity_jwmkix.png"
        alt="donate button"
      />
    </Link>
  );
};

export default DonateBt;
