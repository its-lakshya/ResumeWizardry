import Navbar from "../components/navbar/Navbar";
import { homePageIntroPara } from "../data/Constants";
import HomePageAnimation from "../components/animations/HomePageAnimation";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="bg-[#003459] min-h-screen flex flex-col items-center">
        <Navbar />
        <div className="w-3/4 flex mt-10 h-[80vh]  items-center ">
          <div className="w-1/2  flex-col text-white">
            <div className=" font-bold text-6xl flex-col mb-10 ">
              Create Your Perfect{" "}
              <span className="text-[#EA4492] text-7xl font-serif">Resume</span>
              <br /> Today
            </div>
            <div className="text-[1.24rem] font-normal">
              {homePageIntroPara}
            </div>
          </div>
          <HomePageAnimation />
        </div>
      </div>
    </div>
  );
};

export default Home;

// #041B2D
// #004E9A
// #031B88
// #240E8B
// #428CD4
// #6096FD
// #003459
