import { lableClassNames, inputClassNames } from "./ConstantClassNames";

const SkillForm = () => {

    return (
      <form className="flex flex-col w-full  gap-y-4 ">
        <div className="flex justify-between   ">
          <lable className={lableClassNames}>
            skill
            <input
              placeholder="Add your skill here."
              className={inputClassNames}
            />
          </lable>
        </div>
      </form>
    );
}

export default SkillForm