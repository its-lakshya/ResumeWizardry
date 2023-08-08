import "./HomePageAnimation.css";
import Resume1 from "../../assets/Resume8.jpg";
import Resume2 from "../../assets/Resume2.jpg";

const HomePageAnimation = () => {
  return (
    <div className="h-full flex flex-col justify-center  items-end w-1/2">
      <div className='flex flex-col items-center mr-4 gap-y-4'>
        <div className="flex gap-x-4">
          <div className="w-56 h-80 ResumeImage1 bg-cover border-r-[12px] border-t-[12px] rounded-l-[3rem] border-[#EA4492]">
            <img className="h-full w-full" alt="Resume" src={Resume1} />
          </div>
          <div className="w-56 h-80 ResumeImage2 bg-cover border-r-[12px] border-t-[12px] rounded-l-[3rem] border-[#428CD4]">
            <img className="h-full w-full" alt="Resume" src={Resume2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAnimation;
