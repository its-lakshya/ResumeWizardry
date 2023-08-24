import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import EducationForm from "./EducationForm";
import { addStyleSection } from "../../store/FormPageHeaderSlice";
import { setNextRoute } from '../../store/RoutesSlice';

const FormEducationSection = () => {
  const [count, setCount] = useState(1)
  const [education, setEducation] = useState([<EducationForm key={count} value={count}/>])
  const [buttonVisibility, setButtonVisibility] = useState('')

  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(addStyleSection('education'))
    dispatch(setNextRoute('/build-resume/form/experience'))
    
    return () => {
      dispatch(addStyleSection())
    }
    
  }, [])

  const handleClick = () => {
    if(count<3){
      setEducation((prev) => [...prev, <EducationForm key={count+1} value={count+1}/>])
      setCount(count+1)
      if(count===2){
        setButtonVisibility('hidden')
      }
    }
    
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
