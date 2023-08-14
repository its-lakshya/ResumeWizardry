import "../animations/HomePageAnimation.css";

const HomePageLandingButton = ({bgColor, textColor, hoverColor, hoverBorderColor, text, width, height}) => {
  return (
    <div className={`${height} ${width} HomePageLandingButtonDiv flex items-center ${hoverColor} ${hoverBorderColor} hover:border-b-8  rounded-full`}>
      <div className={`${height} ${width}  ${textColor} HomePageLandingButton  ${bgColor} rounded-full capitalize flex justify-center pt-[0.8rem] font-semibold text-lg`}>
        {text}
      </div>
    </div>
  );
};

export default HomePageLandingButton;

//3.5rem
//72rem