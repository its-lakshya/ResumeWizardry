import { BsCheckLg } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { storeSectionSelection } from "../../store/AddSectionSlice";
import { useSelector } from "react-redux";

const AddSectionForm = ({text}) => {
  const [isCheckVisible, setIsCheckVisible] = useState("invisible");
  const dispatch = useDispatch()
  const store = useSelector((store)=> store.sectionSelectionDetails)
  
  // const websiteVisibility = useSelector((store)=> store.sectionSelectionDetails.websiteTick)
  // const certificationsVisibility = useSelector((store)=> store.sectionSelectionDetails.certificationsTick)
  // const languagesVisibility = useSelector((store)=> store.sectionSelectionDetails.languagesTicks)
  // const accomplishmentsVisibility = useSelector((store)=> store.sectionSelectionDetails.accomplishmentsTick)
  // const additionalInfomationVisibility = useSelector((store)=> store.sectionSelectionDetails.additionalInfomationTick)
  
  

  const handleClick = () => {
    setIsCheckVisible(store)
    dispatch(storeSectionSelection(text))

    // if (isCheckVisible === "invisible" || store === true ) {
    //   console.log(store)
    //   setIsCheckVisible("visible");
    // } else {
    //   setIsCheckVisible("invisible");
    // }

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
