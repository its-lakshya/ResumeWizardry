import "../animations/HomePageAnimation.css";

const HomePageLandingButton = () => {
  return (
    <div className={`h-[3.5rem] HomePageLandingButtonDiv flex items-center hover:bg-[#FF9CDA] hover:border-[#FF9CDA] hover:border-b-8  w-72 rounded-full`}>
      <div className={` HomePageLandingButton w-72 h-[3.5rem] bg-[#EA4492] rounded-full capitalize flex justify-center pt-[0.8rem] font-semibold text-lg`}>
        Build my resume now
      </div>
    </div>
  );
};

export default HomePageLandingButton;


