
import {
    PiNumberCircleOneFill,
    PiNumberCircleTwoFill,
    PiNumberCircleThreeFill,
    PiNumberCircleFourFill,
  } from "react-icons/pi";
  import HomePageLandingButton from "../components/buttons/HomePageLandingButton";
  import { Link } from "react-router-dom";

const BuildResumeStartPage  = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="h-[72%] w-[28%]  flex flex-col justify-center items-center px-12 gap-y-7 shadow-lg shadow-gray-400">
            <div className="text-[#003459] text-3xl font-bold">ResumeWizardry</div>
            <div className="text-5xl text-center font-bold">
              Just four magical steps
            </div>
            <div className="flex flex-col text-[1.05rem] items-center justify-center gap-y-3">
              <div className="flex justify-center items-center gap-x-4">
                <span className="text-4xl text-[#003459]">
                  <PiNumberCircleOneFill />
                </span>
                Select a template from our library of professional designs
              </div>
              <div className="flex justify-center items-center gap-x-4">
                <span className="text-4xl text-[#003459]">
                  <PiNumberCircleTwoFill />
                </span>
                Build your resume with our industry-specific bullet points
              </div>
              <div className="flex justify-center items-center gap-x-4">
                <span className="text-4xl text-[#003459]">
                  <PiNumberCircleThreeFill />
                </span>
                Customize your resume on your own terms
              </div>
              <div className="flex justify-center items-center gap-x-4">
                <span className="text-4xl text-[#003459]">
                  <PiNumberCircleFourFill />
                </span>
                Download your resume, print it out and get it ready to send!
              </div>
            </div>
            <Link to="choose-template">
              <HomePageLandingButton
                bgColor="bg-[#EA4492]"
                textColor="text-white"
                hoverColor="bg-[#FF9CDA]"
                hoverBorderColor="border-[#FF9CDA]"
                text='build my resume now'
              />
            </Link>
          </div>
        </div>
      );
}

export default BuildResumeStartPage