import { labelClassNames, inputClassNames } from "./ConstantClassNames";

const EducationForm = () => {
  
    return (
      <form className="flex flex-col w-full  gap-y-4 ">
        <div className="flex justify-between">
          <label className={labelClassNames}>
            institute name
            <input placeholder="Oxford University" className={inputClassNames} />
          </label>
          <label className={labelClassNames}>
            institute location
            <input placeholder="London" className={inputClassNames} />
          </label>
        </div>
  
        <div className="flex justify-between">
          <label className={labelClassNames}>
            degree
            <input placeholder="B-Tech" className={inputClassNames} />
          </label>
          <label className={labelClassNames}>
            field of study
            <input placeholder="Computer Science" className={inputClassNames} />
          </label>
        </div>
  
        <div className="flex justify-between ">
          <label className={labelClassNames}>
            graduation start
            <input type="month" placeholder="start" className={inputClassNames} />
          </label>
          <label className={labelClassNames}>
            graduation end (or expected graduation end)
            <input type="month" placeholder="end" className={inputClassNames} />
          </label>
        </div>
      </form>
    );
  };
  
export default EducationForm