import Navbar from "../components/navbar/Navbar";
import { homePageIntroPara } from "../data/Constants";
import HomePageAnimation from "../components/animations/HomePageAnimation";
import HomePageLandingButton from "../components/buttons/HomePageLandingButtons";
import HowItWorks from "../components/howItWorks/HowItWorks";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#003459] h-screen flex flex-col items-center align-middle overflow-hidden ">
        <Navbar />
          <div className="w-3/4 flex h-full items-center ">
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
                <HomePageLandingButton />
              </div>
            </div>
            <HomePageAnimation />
          </div>
      </div>
      <HowItWorks />
    </div>
  );
};

export default Home;
