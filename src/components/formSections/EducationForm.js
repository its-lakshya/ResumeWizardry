import { labelClassNames, inputClassNames } from "./ConstantClassNames";
import {
  storeInstituteName,
  storeInstituteLocation,
  storeDegree,
  storeFieldofStudy,
  storeGraduactionStart,
  storeGraduationEnd,
} from "../../store/EducationFormSlice";
import { useDispatch, useSelector } from "react-redux";

const EducationForm = ({value}) => {
  const dispatch = useDispatch();

  const EducationDetails =  useSelector((store) => store.educationDetails)


  const handleChange = ({ Name, Location, Degree, Field, Start, End }) => {
    if(Name){
      dispatch(storeInstituteName({count:value, data:Name.target.value}))
    }
    if(Location){
      dispatch(storeInstituteLocation({count:value, data:Location.target.value}))
    }
    if(Degree){
      dispatch(storeDegree({count:value, data:Degree.target.value}))
    }
    if(Field){
      dispatch(storeFieldofStudy({count:value, data:Field.target.value}))
    }
    if(Start){
      dispatch(storeGraduactionStart({count:value, data:Start.target.value}))
    }
    if(End){
      dispatch(storeGraduationEnd({count:value, data:End.target.value}))
    }

  };

  return (
    <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between">
        <label className={labelClassNames}>
          institute name
          <input
            placeholder="Oxford University"
            className={inputClassNames}
            onChange={(Name) => handleChange({ Name })}
            value={EducationDetails.instituteName[value]}
            />
        </label>
        <label className={labelClassNames}>
          institute location
          <input
            placeholder="London"
            className={inputClassNames}
            onChange={(Location) => handleChange({ Location })}
            value={EducationDetails.instituteLocation[value]}
            />
        </label>
      </div>

      <div className="flex justify-between">
        <label className={labelClassNames}>
          degree
          <input
            placeholder="B-Tech"
            className={inputClassNames}
            onChange={(Degree) => handleChange({ Degree })}
            value={EducationDetails.degree[value]}
            />
        </label>
        <label className={labelClassNames}>
          field of study
          <input
            placeholder="Computer Science"
            className={inputClassNames}
            onChange={(Field) => handleChange({ Field })}
            value={EducationDetails.fieldofStudy[value]}
            />
        </label>
      </div>

      <div className="flex justify-between ">
        <label className={labelClassNames}>
          graduation start
          <input
            type="month"
            placeholder="start"
            className={inputClassNames}
            onChange={(Start) => handleChange({ Start })}
            value={EducationDetails.graduationStart[value]}
          />
        </label>
        <label className={labelClassNames}>
          graduation end (or expected graduation end)
          <input
            type="month"
            placeholder="end"
            className={inputClassNames}
            onChange={(End) => handleChange({ End })}
            value={EducationDetails.graduationEnd[value]}
          />
        </label>
      </div>

      <hr className='border-t border-gray-500'></hr>
    </form>
  );
};

export default EducationForm;
