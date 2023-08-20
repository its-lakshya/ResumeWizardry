import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
  PiNumberCircleFourFill,
  PiNumberCircleFiveFill,
  PiNumberCircleSixFill,
} from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FormPageHeader = () => {

  const style = useSelector((store) => store?.styleSection?.Section);

  return (
    <div className="w-full h-12 font-bold flex justify-center bg-[#003459] bg-opacity-95 shadow-lg  ">
      <div className="w-full flex justify-center items-center">
        <Link to="/" className="font-bold text-2xl text-white -mt-2">
          ResumeWisardry
        </Link>
        <ul className="w-3/5 h-full flex justify-center gap-x-8 font-normal text-lg text-gray-300 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:gap-x-1 ">
          <li className={style==='contact' ? 'text-red-400' : null}>
            <PiNumberCircleOneFill />
            Contact
          </li>
          <li className={style==='education' ? 'text-red-400' : null}>
            <PiNumberCircleTwoFill />
            Education
          </li>
          <li className={style==='experience' ? 'text-red-400' : null}>
            <PiNumberCircleThreeFill />
            Professionl Experience
          </li>
          <li className={style==='skills' ? 'text-red-400' : null}>
            <PiNumberCircleFourFill />
            Skills
          </li>
          <li className={style==='summary' ? 'text-red-400' : null}>
            <PiNumberCircleFiveFill />
            Summary
          </li>
          <li className={style==='education' ? 'text-red-400' : null}>
            <PiNumberCircleSixFill />
            Finalize
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormPageHeader;

// {style === "contact" ? "text-red-200" : null}
