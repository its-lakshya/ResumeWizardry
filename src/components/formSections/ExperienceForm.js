import { labelClassNames, inputClassNames } from "./ConstantClassNames";

const ExperienceForm = () => {

  return (
    <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between   ">
        <label className={labelClassNames}>
          What was your title?
          <input
            placeholder="Similar to the tile that best describes you."
            className={inputClassNames}
          />
        </label>
        <label className={labelClassNames}>
          who did you this for?
          <input
            placeholder="Person, organization, company name."
            className={inputClassNames}
          />
        </label>
      </div>

      <div className="flex justify-between   ">
        <label className={labelClassNames}>
          city
          <input placeholder="New Delhi" className={inputClassNames} />
        </label>
        <label className={labelClassNames}>
          country
          <input placeholder="India" className={inputClassNames} />
        </label>
      </div>

      <div className="flex justify-between ">
        <label className={labelClassNames}>
          start date
          <input type="month" placeholder="start" className={inputClassNames} />
        </label>
        <label className={labelClassNames}>
          end date
          <input type="month" placeholder="end" className={inputClassNames} />
        </label>
      </div>

      <div>
        <label className={`flex flex-col w-full text-[0.63rem] uppercase font-bold gap-y-2`}>
        Nice! Now let's describe what you did
          <input className={inputClassNames} />
          <input className={inputClassNames} />
          <input className={inputClassNames} />
          <input className={inputClassNames} />
          <input className={inputClassNames} />
        </label>
      </div>
    </form>
  );
};

export default ExperienceForm;
