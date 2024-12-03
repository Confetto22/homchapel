const Drawer = ({ onOpen, onClose, children }) => {
  return (
    <div
      className={`drawer fixed top-0 right-0 z-[10001] h-screen p-4 overflow-y-auto ease-in-out duration-500 bg-[#353535] md:w-[40%] w-[75%] pt-12 ${
        onOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={onClose}
        type="button"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
      {children}
    </div>
  );
};

export default Drawer;