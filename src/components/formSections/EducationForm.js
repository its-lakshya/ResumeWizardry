import { lableClassNames, inputClassNames } from "./ConstantClassNames";

const EducationForm = () => {
  
    return (
      <form className="flex flex-col w-full  gap-y-4 ">
        <div className="flex justify-between   ">
          <lable className={lableClassNames}>
            institute name
            <input placeholder="Oxford University" className={inputClassNames} />
          </lable>
          <lable className={lableClassNames}>
            institute location
            <input placeholder="London" className={inputClassNames} />
          </lable>
        </div>
  
        <div className="flex justify-between">
          <lable className={lableClassNames}>
            degree
            <input placeholder="B-Tech" className={inputClassNames} />
          </lable>
          <lable className={lableClassNames}>
            field of study
            <input placeholder="Computer Science" className={inputClassNames} />
          </lable>
        </div>
  
        <div className="flex justify-between ">
          <lable className={lableClassNames}>
            graduation start
            <input type="month" placeholder="start" className={inputClassNames} />
          </lable>
          <lable className={lableClassNames}>
            graduation end (or expected graduation end)
            <input type="month" placeholder="end" className={inputClassNames} />
          </lable>
        </div>
      </form>
    );
  };
  
export default EducationForm