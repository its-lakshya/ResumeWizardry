import { labelClassNames, inputClassNames } from "./ConstantClassNames";

export const LinksSection = ({text}) => {
    return(
      <form className="flex flex-col w-full  gap-y-4 ">
          <div className="flex justify-between   ">
            <label className={labelClassNames}>
              {text}
              <input
                placeholder={`Add your ${text} here.`}
                className={inputClassNames}
                // onChange={(Skill)=> handleChange({Skill})}
              />
            </label>
          </div>
        </form>
    )
  }


export const CombineSummary = ({text}) =>  {
    return (
      <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between   ">
        <label
          className={`flex flex-col w-full text-[0.63rem] uppercase font-bold gap-y-2`}
        >
          {text}
          <textarea
            placeholder={`Add your ${text} here.`}
            className={`text-start h-56 border border-gray-400 text-base p-2 font-normal outline outline-0 focus:border-b-[4px] focus:border-b-[#003459]`}
            // onChange={(Summary) => handleChange({ Summary })}
          />
        </label>
      </div>
    </form>
    )
}