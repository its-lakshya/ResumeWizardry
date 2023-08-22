import { useState, useEffect } from "react";
import ExperienceForm from "./ExperienceForm";
import { useDispatch } from "react-redux";
import { addStyleSection } from "../../store/FormPageHeaderSlice";

const FormExperienceSection = () => {
  const [count, setCount] = useState(1);  
  const [experience, setExperience] = useState([<ExperienceForm key={count} value={count} />]);
  const [buttonVisibility, setButtonVisibility] = useState("");

  const handleClick = () => {
    if (count < 3) {
      setExperience((prev) => [...prev, <ExperienceForm key={count+1} value={count + 1} />]);
      setCount(count + 1);
      if (count === 2) {
        setButtonVisibility("hidden");
      }
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addStyleSection("experience"));

    return () => {
      dispatch(addStyleSection());
    };
  }, []);

  return (
    <div className="mx-10 py-10 min-h-[83vh] w-1/2 flex items-center">
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
