import { useState, useEffect } from "react";
import SkillForm from "./SkillForm";
import { useDispatch } from "react-redux";
import { addStyleSection } from "../../store/FormPageHeaderSlice";

const FormSkillSection = () => {
  const [skill, setSkill] = useState([<SkillForm />]);
  const handleClick = () => {
    setSkill((prev) => [...prev, <SkillForm />]);
  };

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addStyleSection('skills'))
    
    return () => {
      dispatch(addStyleSection())
    }
    
  }, [])

  return (
    <div className="mx-10 py-10 min-h-[83vh] w-1/2 flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          What skills would you like to highlight?{" "}
          <span className="text-lg font-normal">
            Employers scan skills for relevant keywords. Add relevant professional key skills and proficiencies.
          </span>
        </div>
        {skill}
        <button onClick={handleClick} className={`text-[#EA4492] `}>
          + Add another skill
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default FormSkillSection;
