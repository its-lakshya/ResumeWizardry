import Navbar from "../components/homePageSections/Navbar";
import { homePageIntroPara } from "../data/Constants";
import HomePageAnimation from "../components/homePageSections/HomePageAnimation";
import HomePageLandingButton from "../components/buttons/HomePageLandingButton";
import HowItWorks from "../components/homePageSections/HowItWorks";
import ResumeBackgroundSVG from "../components/homePageSections/ResumeBackgroundSVG";
import YesWeAreWizards from "../components/homePageSections/YesWeAreWizards";
import { Link } from "react-router-dom";
import Footer from "../components/homePageSections/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 scroll-smooth scroll-m-96 ">
      <div className="flex flex-col w-full h-screen  items-center bg-red-200 max-md:h-auto">
        <div className="w-full h-20 font-bold flex justify-center bg-white bg-opacity-95 shadow-lg">
          <Navbar />
        </div>
        <div className="bg-[#003459] w-full h-full flex items-center justify-center max-md:py-16">
          <div className="w-3/4 flex items-center max-lg:w-full max-lg:px-6 max-md:flex-col-reverse max-md:gap-y-8">
            <div className="w-1/2  flex-col text-white max-md:w-full ">
              <div className=" font-bold text-6xl flex-col mb-6 max-lg:text-4xl max-md:text-[2.6rem]">
                Create Your Perfect{" "}
                <span className="text-[#EA4492] text-7xl font-serif max-lg:text-[3.5rem]">
                  Resume
                </span>
                <br /> Today
              </div>
              <div className="text-[1.24rem] font-normal mb-6 max-lg:text-base max-lg:text-justify">
                {homePageIntroPara}
              </div>
              <Link to="/build-resume">
                <HomePageLandingButton
                  bgColor="bg-[#EA4492]"
                  textColor="text-white"
                  hoverColor="bg-[#FF9CDA]"
                  hoverBorderColor="border-[#FF9CDA]"
                  text="Build my resume now"
                  height='h-[3.5rem] max-lg:h-[3.2rem]'
                  width='w-72 max-lg:w-64'
                />
              </Link>
            </div>
            <HomePageAnimation />
          </div>
        </div>
      </div>
      <HowItWorks />
      <ResumeBackgroundSVG />
      <YesWeAreWizards />
      <Footer/>
    </div>
  );
};

export default Home;
