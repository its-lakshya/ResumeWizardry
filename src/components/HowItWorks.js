import useScroll from "../hooks/useScroll";
import PickATemplate from "../assets/PickATemplateImage.png";
import MakeYourResume from "../assets/MakeYourResumeImage.png";
import CustomizeTheDesign from "../assets/CustomizeTheDesignImage.png";
import DownloadResume from "../assets/DownloadResumeImage.png";
import HomePageLandingButton from "./buttons/HomePageLandingButtons";
import "./animations/HomePageAnimation.css";

const HowItWorks = () => {
  const scroll = useScroll();

  if (scroll >= 0)
    return (
      <div className="bg-white h-screen w-full flex justify-center">
        {scroll > 100 && (
          <div className="HowItWorks h-3/4 text-4xl text-[#041B2D] font-medium mt-24 opacity-0 flex flex-col items-center justify-between">
            Just four simple steps towards your wizardous resume
            <div className="flex text-base tracking-normal gap-x-24 justify-center [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:opacity-0 font-normal  ">
              <div className="PickATemplate">
                <img
                  className="w-48 h-72"
                  alt="Pick a template"
                  src={PickATemplate}
                />{" "}
                Pick A Template
              </div>
              <div className="MakeYourResume">
                <img
                  className="w-48 h-72"
                  alt="Make Your Resume"
                  src={MakeYourResume}
                />{" "}
                Make Your Resume
              </div>
              <div className="CustomizeTheDesign">
                <img
                  className="w-64 h-72"
                  alt="Customize The Design"
                  src={CustomizeTheDesign}
                />{" "}
                Customize The Design
              </div>
              <div className="DownloadYourResume">
                <img
                  className="w-48 h-72"
                  alt="Download Your Resume"
                  src={DownloadResume}
                />{" "}
                Download Your Resume
              </div>
            </div>
            <HomePageLandingButton bgColor='bg-[#004E9A]' textColor='text-white' hoverColor='hover:bg-[#428CD4]' hoverBorderColor={'border-[#428CD4]'}/>

          </div>
        )}
      </div>
    );
};

export default HowItWorks;
