import MagicalResumeSVG from "../assets/MagicalResumeSVG.svg";
import { BsCheck2Circle } from "react-icons/bs";
import HomePageLandingButton from "./buttons/HomePageLandingButtons";

const YesWeAreWizards = () => {
  return (
    <div className="bg-transparent flex justify-center items-center  min-h-screen">
      <div className=" h-full w-4/5 flex flex-col items-center justify-center gap-y-20">
        <div className="text-4xl font-medium text-[#041B2D]">
          Yes we are wizards! explore our magical wizardry
        </div>
        <div className="flex w-full">
          <div className=" w-1/2 h-2/3 flex flex-col gap-y-8 text-left">
            <div className="tracking-wide font-semibold text-xl text-[#041B2D]">
              <span className="flex items-center gap-x-4 "><span className='text-4xl text-[#004E9A]'><BsCheck2Circle/></span>Professional Resume Templates</span>
              <div className="tracking-normal text-[1.07rem] font-normal w-5/6">
                Choose from over thirty modern and professional templates. All
                of which can be customized to your liking.
              </div>
            </div>
            <div className="tracking-wide font-semibold text-xl text-[#041B2D]">
            <span className="flex items-center gap-x-4 "><span className='text-4xl text-[#004E9A]'><BsCheck2Circle/></span>Fast, Free, and Easy to Use</span>
              <div className="tracking-normal text-[1.07rem] font-normal w-5/6">
                Our resume builder lets you easily and quickly create a resume
                using our resume wizard. No signUp required.
              </div>
            </div>
            <div className="tracking-wide font-semibold text-xl text-[#041B2D]">
            <span className="flex items-center gap-x-4 "><span className='text-4xl text-[#004E9A]'><BsCheck2Circle/></span>Robust Text Editor</span>              <div className="tracking-normal text-[1.07rem] font-normal w-5/6">
                Our text editor has everything you need to customize your
                resume. Choose different fonts, sizes, bullets and much more.
              </div>
            </div>
            <div className="tracking-wide font-semibold text-xl text-[#041B2D]">
            <span className="flex items-center gap-x-4 "><span className='text-4xl text-[#004E9A]'><BsCheck2Circle/></span>Download your resume as PDF</span>
              <div className="tracking-normal text-[1.07rem] font-normal w-5/6">
                Download your resume and send it straight to the hiring manager.
                Easily download in PDF format without any extra charges for
                free.
              </div>
            </div>
          </div>
          <div className="w-1/2 h-2/3">
            <img alt="Imge" src={MagicalResumeSVG} />
          </div>
        </div>
        <HomePageLandingButton bgColor='bg-[#004E9A]' textColor='text-white' hoverColor='hover:bg-[#428CD4]' hoverBorderColor={'border-[#428CD4]'}/>
      </div>
    </div>
  );
};

export default YesWeAreWizards;
