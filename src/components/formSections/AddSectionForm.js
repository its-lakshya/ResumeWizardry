import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";

const AddSectionForm = ({text}) => {
  const [isCheckVisible, setIsCheckVisible] = useState("invisible");

  const handleClick = () => {
    if (isCheckVisible === "invisible") {
      setIsCheckVisible("visible");
    } else {
      setIsCheckVisible("invisible");
    }
  };

  return (
    <div className='flex items-center gap-x-6'>
      <div
        className={`w-6 h-6  border border-gray-500 flex items-center justify-center [&>*]:${isCheckVisible} [&>*]:text-6xl [&>*]:text-[#003459]`}
        onClick={handleClick}
      >
        <BsCheckLg />
      </div>
      {text}
    </div>
  );
};

export default AddSectionForm;
