import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import EducationForm from "./EducationForm";
import { addStyleSection } from "../../store/FormPageHeaderSlice";
import { setNextRoute } from "../../store/RoutesSlice";

const FormEducationSection = () => {
  const [count, setCount] = useState(0);
  const [education, setEducation] = useState([
    <EducationForm key={count} value={count} />,
  ]);
  const [buttonVisibility, setButtonVisibility] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addStyleSection("education"));
    dispatch(setNextRoute("/build-resume/form/experience"));

    return () => {
      dispatch(addStyleSection());
    };
  }, []);

  const handleClick = () => {
    if (count < 2) {
      setEducation((prev) => [
        ...prev,
        <EducationForm key={count + 1} value={count + 1} />,
      ]);
      setCount(count + 1);
      if (count === 1) {
        setButtonVisibility("hidden");
      }
    }
  };

  return (
    <div className="py-10 min-h-[83vh] flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3 max-md:text-center ̰">
          Tell us about your education
          <span className="text-lg font-normal">
            Enter your education experience so far, even if you are a current
            student or did not graduate.
          </span>
        </div>
        {education}
        <button
          onClick={handleClick}
          className={`text-[#EA4492] ${buttonVisibility} `}
        >
          + Add another education
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default FormEducationSection;
