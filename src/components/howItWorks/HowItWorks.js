import useScroll from "../../hooks/useScroll";
import PickATemplate from "../../assets/PickATemplateImage.png";
import MakeYourResume from "../../assets/MakeYourResumeImage.png";
import CustomizeTheDesign from "../../assets/CustomizeTheDesignImage.png";
import DownloadResume from "../../assets/DownloadResumeImage.png";
import HomePageLandingButtons from "../buttons/HomePageLandingButtons"

const HowItWorks = () => {
  const scroll = useScroll();

  if (scroll >= 0)
    return (
      <div className="h-full w-full flex justify-center">
        {scroll >= 200 && (
          <div className=" h-3/4 text-4xl text-[#041B2D] font-medium mt-24 flex flex-col items-center justify-between">
            Just four simple steps towards your wizardous resume
            <div className="flex text-base tracking-normal gap-x-24 justify-center [&>*]:flex [&>*]:flex-col [&>*]:items-center font-normal  ">
              <div>
                <img
                  className="w-48 h-72"
                  alt="Pick a template"
                  src={PickATemplate}
                />{" "}
                Pick A Template
              </div>
              <div>
                <img
                  className="w-48 h-72"
                  alt="Make Your Resume"
                  src={MakeYourResume}
                />{" "}
                Make Your Resume
              </div>
              <div>
                <img
                  className="w-64 h-72"
                  alt="Customize The Design"
                  src={CustomizeTheDesign}
                />{" "}
                Customize The Design
              </div>
              <div>
                <img
                  className="w-48 h-72"
                  alt="Download Your Resume"
                  src={DownloadResume}
                />{" "}
                Download Your Resume
              </div>
            </div>
            <span className='text-white'>
            <HomePageLandingButtons/>
            </span>
          </div>
        )}
      </div>
    );
};

export default HowItWorks;
