import { useState } from "react";
import EducationForm from "./EducationForm";

const FormEducationSection = () => {
  // const [visiblityForm2, setVisiblityForm2] = useState("hidden");
  // const [visiblityForm3, setVisiblityForm3] = useState("hidden");
  // const [buttonVisibility, setButtonVisibility] = useState("visible");
  const [Education, setEducation] = useState([<EducationForm/>])

  const handleClick = () => {
    // setVisiblityForm2("visible");
    // if (visiblityForm2 === "visible") {
    //   setVisiblityForm3("visible");
    //   setButtonVisibility("hidden");
    // }
    setEducation((prev) => [...prev, <EducationForm/>])
  };

  return (
    <div className="mx-10 py-10 min-h-[83vh] w-1/2 flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          Tell us about your education
          <span className="text-lg font-normal">
            Enter your education experience so far, even if you are a current
            student or did not graduate.
          </span>
        </div>
        {/* <EducationForm />
        <div className={` ${visiblityForm2} w-full `}>
          <EducationForm />
        </div>
        <div className={` ${visiblityForm3} w-full`}>
          <EducationForm />
        </div> */}
        {Education}
        <button
          onClick={handleClick}
          // className={` ${buttonVisibility} text-[#EA4492] -mt-5`}
          className={`text-[#EA4492] `}
        >
          + Add more education
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default FormEducationSection;
