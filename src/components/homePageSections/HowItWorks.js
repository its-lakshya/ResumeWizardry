import useScroll from "../../hooks/useScroll";
import PickATemplate from "../../assets/PickATemplateImage.png";
import MakeYourResume from "../../assets/MakeYourResumeImage.png";
import CustomizeTheDesign from "../../assets/CustomizeTheDesignImage.png";
import DownloadResume from "../../assets/DownloadResumeImage.png";
import HomePageLandingButton from "../buttons/HomePageLandingButton";
import "../animations/HomePageAnimation.css";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const scroll = useScroll();

  if (scroll >= 0)
    return (
      <div className="bg-white h-screen w-full flex justify-center items-start px-10 max-md:h-auto max-md:pb-16 ">
        {scroll > 100 && (
          <div className="HowItWorks h-[26rem] max-lg:h-auto text-4xl max-lg:text-3xl max-lg:text-center text-[#041B2D] font-medium 
          opacity-0 flex flex-col items-center justify-between gap-y-12 ">
            Just four simple steps towards your wizardous resume
            <div className="flex text-base tracking-normal gap-x-24 justify-center [&>*]:flex [&>*]:flex-col 
            [&>*]:items-center [&>*]:opacity-0 font-normal max-lg:gap-x-12 max-lg:gap-y-12 max-md:flex-col">
              <div className="PickATemplate">
                <img
                  className="w-48 h-72 max-lg:w-40 max-lg:h-64 max-md:w-48 max-md:h-72"
                  alt="Pick a template"
                  src={PickATemplate}
                />{" "}
                Pick A Template
              </div>
              <div className="MakeYourResume">
                <img
                  className="w-48 h-72 max-lg:w-40 max-lg:h-64 max-md:w-48 max-md:h-72"
                  alt="Make Your Resume"
                  src={MakeYourResume}
                />{" "}
                Make Your Resume
              </div>
              <div className="CustomizeTheDesign">
                <img
                  className="w-64 h-72 max-lg:w-56 max-lg:h-64 max-md:w-64 max-md:h-72"
                  alt="Customize The Design"
                  src={CustomizeTheDesign}
                />{" "}
                Customize The Design
              </div>
              <div className="DownloadYourResume">
                <img
                  className="w-48 h-72 max-lg:w-40 max-lg:h-64 max-md:w-48 max-md:h-72"
                  alt="Download Your Resume"
                  src={DownloadResume}
                />{" "}
                Download Your Resume
              </div>
            </div>
            <Link to="/build-resume">
              <HomePageLandingButton
                bgColor="bg-[#004E9A]"
                textColor="text-white"
                hoverColor="hover:bg-[#428CD4]"
                hoverBorderColor={"border-[#428CD4]"}
                text="Build my resume now"
                height="h-[3.5rem]"
                width="w-72"
              />
            </Link>
          </div>
        )}
      </div>
    );
};

export default HowItWorks;
