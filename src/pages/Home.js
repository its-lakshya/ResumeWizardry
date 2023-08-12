import Navbar from "../components/navbar/Navbar";
import { homePageIntroPara } from "../data/Constants";
import HomePageAnimation from "../components/animations/HomePageAnimation";
import HomePageLandingButton from "../components/buttons/HomePageLandingButtons";
import HowItWorks from "../components/howItWorks/HowItWorks";
import ResumeBackgroundSVG from "../components/resumeBackgroundSVG/ResumeBackgroundSVG";
import YesWeAreWizards from "../components/yesWeAreWizards/YesWeAreWizards";

const Home = () => {
  return (
    <div className="bg-gray-100 scroll-smooth scroll-m-96">
      <div className="flex flex-col w-full h-screen items-center">
        <div className="w-full h-20 font-bold flex justify-center bg-white bg-opacity-95 shadow-lg">
          <Navbar />
        </div>
        <div className="bg-[#003459] w-full h-full flex items-center justify-center">
          <div className="w-3/4 flex items-center">
            <div className="w-1/2  flex-col text-white">
              <div className=" font-bold text-6xl flex-col mb-6">
                Create Your Perfect{" "}
                <span className="text-[#EA4492] text-7xl font-serif">
                  Resume
                </span>
                <br /> Today
              </div>
              <div className="text-[1.24rem] font-normal mb-6">
                {homePageIntroPara}
              </div>
              <div>
                <HomePageLandingButton bgColor='bg-[#EA4492]' textColor='white' hoverColor='bg-[#FF9CDA]' hoverBorderColor='border-[#FF9CDA]' />
              </div>
            </div>
            <HomePageAnimation />
          </div>
        </div>
      </div>
      <HowItWorks />
      <ResumeBackgroundSVG />
      <YesWeAreWizards />
    </div>
  );
};

export default Home;
