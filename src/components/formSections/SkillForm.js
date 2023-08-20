import { labelClassNames, inputClassNames } from "./ConstantClassNames";

const SkillForm = () => {

    return (
      <form className="flex flex-col w-full  gap-y-4 ">
        <div className="flex justify-between   ">
          <label className={labelClassNames}>
            skill
            <input
              placeholder="Add your skill here."
              className={inputClassNames}
            />
          </label>
        </div>
      </form>
    );
}

export default SkillForm