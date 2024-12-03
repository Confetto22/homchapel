const CustomButton = ({
  text,
  // textColor,
  //   bg,
  //   hoveredTextColor,
  // hoveredBg,
  buttonStyle,
}) => {
  return (
    <button
      className={`customButton ${buttonStyle}  duration-300 font-semibold rounded-full  `}
    >
      {text}
    </button>
  );
};

export default CustomButton;
