import "../animations/HomePageAnimation.css";

const HomePageLandingButton = ({bgColor, textColor, hoverColor, hoverBorderColor, text}) => {
  return (
    <div className={`h-[3.5rem] HomePageLandingButtonDiv flex items-center ${hoverColor} ${hoverBorderColor} hover:border-b-8  w-72 rounded-full`}>
      <div className={`${textColor} HomePageLandingButton w-72 h-[3.5rem] ${bgColor} rounded-full capitalize flex justify-center pt-[0.8rem] font-semibold text-lg`}>
        {text}
      </div>
    </div>
  );
};

export default HomePageLandingButton;