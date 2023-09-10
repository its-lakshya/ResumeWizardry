import { useState, useEffect } from "react";
import ExperienceForm from "./ExperienceForm";
import { useDispatch } from "react-redux";
import { addStyleSection } from "../../store/FormPageHeaderSlice";
import { setNextRoute } from '../../store/RoutesSlice';

const FormExperienceSection = () => {
  const [count, setCount] = useState(0);  
  const [experience, setExperience] = useState([<ExperienceForm key={count} value={count} />]);
  const [buttonVisibility, setButtonVisibility] = useState("");

  const handleClick = () => {
    if (count < 2) {
      setExperience((prev) => [...prev, <ExperienceForm key={count+1} value={count + 1} />]);
      setCount(count + 1);
      if (count === 1) {
        setButtonVisibility("hidden");
      }
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addStyleSection("experience"));
    dispatch(setNextRoute('/build-resume/form/skills'))

    return () => {
      dispatch(addStyleSection());
    };
  }, []);

  return (
    <div className=" py-10 min-h-[83vh] w-full flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          Tell us about your experience{" "}
          <span className="text-lg font-normal">
            Start with your most recent experience and work backward.
          </span>
        </div>
        {experience}
        <button
          onClick={handleClick}
          className={`text-[#EA4492] ${buttonVisibility} `}
        >
          + Add another experience
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default FormExperienceSection;
