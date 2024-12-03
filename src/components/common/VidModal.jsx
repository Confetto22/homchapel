import { IoClose } from "react-icons/io5";

const VidModal = ({ isPlaying }) => {
  return (
    <div
      className={`vidModalBg fixed top-0 left-0 bottom-0 right-0 w-[100vw] h-[100vh] bg-[#000000d3] flex flex-col items-center justify-center gap-3 z-[100] p-8 ${
        isPlaying ? "block" : "hidden"
      }`}
    >
      <h5 className="text-white bg-[#858585]  w-[40px] h-[40px]  flex items-center justify-center text-[2rem] rounded-sm">
        <IoClose />
      </h5>
      <div className="max-w-[700px] ">
        <video className="w-full h-full" controls>
          <source
            src="https://res.cloudinary.com/dv9aqxptd/video/upload/v1723415227/homchapel/HeroBgVideo_xss1qr.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default VidModal;
