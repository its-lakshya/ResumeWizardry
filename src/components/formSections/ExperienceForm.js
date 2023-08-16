import { lableClassNames, inputClassNames } from "./ConstantClassNames";

const ExperienceForm = () => {

  return (
    <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between   ">
        <lable className={lableClassNames}>
          What was your title?
          <input
            placeholder="Similar to the tile that best describes you."
            className={inputClassNames}
          />
        </lable>
        <lable className={lableClassNames}>
          who did you this for?
          <input
            placeholder="Person, organization, company name."
            className={inputClassNames}
          />
        </lable>
      </div>

      <div className="flex justify-between   ">
        <lable className={lableClassNames}>
          city
          <input placeholder="New Delhi" className={inputClassNames} />
        </lable>
        <lable className={lableClassNames}>
          country
          <input placeholder="India" className={inputClassNames} />
        </lable>
      </div>

      <div className="flex justify-between ">
        <lable className={lableClassNames}>
          start date
          <input type="month" placeholder="start" className={inputClassNames} />
        </lable>
        <lable className={lableClassNames}>
          end date
          <input type="month" placeholder="end" className={inputClassNames} />
        </lable>
      </div>

      <div>
        <lable className={`flex flex-col w-full text-[0.63rem] uppercase font-bold gap-y-2`}>
        Nice! Now let's describe what you did
          <input className={inputClassNames} />
          <input className={inputClassNames} />
          <input className={inputClassNames} />
          <input className={inputClassNames} />
          <input className={inputClassNames} />
        </lable>
      </div>
    </form>
  );
};

export default ExperienceForm;
