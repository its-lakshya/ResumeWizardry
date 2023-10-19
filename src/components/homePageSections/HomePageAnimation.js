import "../animations/HomePageAnimation.css";
import Resume1 from "../../assets/Resume8.jpg";
import Resume2 from "../../assets/Resume2.jpg";

const HomePageAnimation = () => {
  return (
    <div className="h-full flex flex-col justify-center  items-end w-1/2 max-sm:w-full max-sm:items-center">
      <div className='flex flex-col items-center mr-4 gap-y-4 max-sm:mr-0'>
        <div className="flex gap-x-4">
          <div className="w-56 h-80 max-lg:w-48 max-lg:h-72 ResumeImage1 bg-cover border-r-[10px] border-t-[10px] rounded-l-[2rem] border-[#EA4492]">
            <img className="h-full w-full" alt="Resume" src={Resume1} />
          </div>
          <div className="w-56 h-80 max-lg:w-48 max-lg:h-72 ResumeImage2 bg-cover border-r-[10px] border-t-[10px] rounded-l-[2rem] border-[#428CD4]">
            <img className="h-full w-full" alt="Resume" src={Resume2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAnimation;
