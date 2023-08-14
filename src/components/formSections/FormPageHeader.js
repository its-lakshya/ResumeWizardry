import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
  PiNumberCircleFiveFill,
  PiNumberCircleSixFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const FormPageHeader = () => {
  return (
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
  );
};

export default FormPageHeader;
