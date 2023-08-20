import {
  PiNumberSquareOneFill,
  PiNumberSquareTwoFill,
  PiNumberSquareThreeFill,
  PiNumberSquareFourFill,
  PiNumberSquareFiveFill,
  PiNumberSquareSixFill,
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
        <ul className="w-3/5 h-full flex justify-center gap-x-8 font-normal text-base text-gray-400 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:gap-x-1 [&>*]:w-28 ">
          <li className={style==='contact' ? 'border-b-4 border-b-[#EA4492] bg-white bg-opacity-10 font-semibold -mb-1 text-white [&>*]:text-[#EA4492] [&>*]:text-xl ' : null}>
            <PiNumberSquareOneFill />
            Contact
          </li>
          <li className={style==='education' ? 'border-b-4 border-b-[#EA4492] bg-white bg-opacity-10 font-semibold -mb-1 text-white [&>*]:text-[#EA4492] [&>*]:text-xl ' : null}>
            <PiNumberSquareTwoFill />
            Education
          </li>
          <li className={style==='experience' ? 'border-b-4 border-b-[#EA4492] bg-white bg-opacity-10 font-semibold -mb-1 text-white [&>*]:text-[#EA4492] [&>*]:text-xl ' : null}>
            <PiNumberSquareThreeFill />
            Experience
          </li>
          <li className={style==='skills' ? 'border-b-4 border-b-[#EA4492] bg-white bg-opacity-10 font-semibold -mb-1 text-white [&>*]:text-[#EA4492] [&>*]:text-xl ' : null}>
            <PiNumberSquareFourFill />
            Skills
          </li>
          <li className={style==='summary' ? 'border-b-4 border-b-[#EA4492] bg-white bg-opacity-10 font-semibold -mb-1 text-white [&>*]:text-[#EA4492] [&>*]:text-xl ' : null}>
            <PiNumberSquareFiveFill />
            Summary
          </li>
          <li className={style==='finalize' ? 'border-b-4 border-b-[#EA4492] bg-white bg-opacity-10 font-semibold -mb-1 text-white [&>*]:text-[#EA4492] [&>*]:text-xl ' : null}>
            <PiNumberSquareSixFill />
            Finalize
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormPageHeader;

// {style === "contact" ? "text-red-200" : null}
