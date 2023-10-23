import { useState, useEffect } from "react";
import SkillForm from "./SkillForm";
import { useDispatch } from "react-redux";
import { addStyleSection } from "../../store/FormPageHeaderSlice";
import { setNextRoute } from "../../store/RoutesSlice";

const FormSkillSection = () => {
  const [count, setCount] = useState(0)

  const [skill, setSkill] = useState([<SkillForm key={count} value={count} />]);
  const [buttonVisibility, setButtonVisibility] = useState('')
  

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addStyleSection('skills'))
    dispatch(setNextRoute('/build-resume/form/summary'))
    
    return () => {
      dispatch(addStyleSection())
    }
    
  }, [])


  const handleClick = () => {
    
    if(count<9){
      setSkill((prev) => [...prev, <SkillForm key={count+1} value={count+1}/>]);
      setCount(count+1)
      if(count===8){
        setButtonVisibility('hidden')
      }
    }
  };


  return (
    <div className="py-10 min-h-[83vh] flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3 max-md:text-center">
          What skills would you like to highlight?{" "}
          <span className="text-lg font-normal">
            Employers scan skills for relevant keywords. Add relevant professional key skills and proficiencies.
          </span>
        </div>
        {skill}
        <button onClick={handleClick} className={`text-[#EA4492] ${buttonVisibility} `}>
          + Add another skill
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default FormSkillSection;
