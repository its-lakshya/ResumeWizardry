import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
  PiNumberCircleFiveFill,
  PiNumberCircleSixFill,
} from "react-icons/pi";
import { Link, Outlet } from "react-router-dom";
import HomePageLandingButton from "../components/buttons/HomePageLandingButton";


const FormPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="w-full h-12 font-bold flex justify-center bg-[#003459] bg-opacity-95 shadow-lg  ">
        <div className="w-full flex justify-center items-center">
          <Link to="/" className="font-bold text-2xl text-white -mt-2">
            ResumeWisardry
          </Link>
          <ul className="w-3/5 h-full flex justify-center gap-x-8 font-normal text-lg text-gray-300 [&>*]:flex [&>*]:justify-center [&>*]:items-center ">
            <li className="gap-x-1">
              <PiNumberCircleOneFill />
              Contact
            </li>
            <li className="gap-x-1">
              <PiNumberCircleTwoFill />
              Education
            </li>
            <li className="gap-x-1">
              <PiNumberCircleThreeFill />
              Professionl Experience
            </li>
            <li className="gap-x-1">
              <PiNumberCircleFourFill />
              Skills
            </li>
            <li className="gap-x-1">
              <PiNumberCircleFiveFill />
              Summary
            </li>
            <li className="gap-x-1">
              <PiNumberCircleSixFill />
              Finalize
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <Outlet />
      {/* <div className="w-full bg-gray-200 h-[10%]">
        <Link to="">
          <HomePageLandingButton
            bgColor="bg-[#004E9A]"
            textColor="text-white"
            hoverColor="bg-[#428CD4]"
            hoverBorderColor="border-[#428CD4]"
            text='next'
          />
        </Link>
      </div> */}
    </div>
  );
};

export default FormPage;
