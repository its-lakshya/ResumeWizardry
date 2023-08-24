import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeSectionSelection } from "../../store/AddSectionSlice";

const AddSectionForm = ({text}) => {
  const [isCheckVisible, setIsCheckVisible] = useState("invisible");
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(storeSectionSelection(text))
    if (isCheckVisible === "invisible") {
      setIsCheckVisible("visible");

    } else {
      setIsCheckVisible("invisible");
    }
  };

  return (
    <div className='flex items-center gap-x-6'>
      <div
        className={`w-6 h-6 cursor-pointer border border-gray-500 flex items-center justify-center  [&>*]:text-2xl [&>*]:text-[#003459]`}
        onClick={handleClick}
      >
        <BsCheckLg className={`${isCheckVisible}`} />
      </div>
      {text}
    </div>
  );
};

export default AddSectionForm;
