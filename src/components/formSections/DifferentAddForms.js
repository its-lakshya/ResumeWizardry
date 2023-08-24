import { labelClassNames, inputClassNames } from "./ConstantClassNames";

export const LinksSection = () => {
    return(
      <form className="flex flex-col w-full  gap-y-4 ">
          <div className="flex justify-between   ">
            <label className={labelClassNames}>
              Links/url
              <input
                placeholder="Add your links here."
                className={inputClassNames}
                // onChange={(Skill)=> handleChange({Skill})}
              />
            </label>
          </div>
        </form>
    )
  }


export const CertificationSection = () =>  {
    return (
        <form className="flex flex-col w-full  gap-y-4 ">
        <div className="flex justify-between   ">
          <lable className={`flex flex-col w-full text-[0.63rem] uppercase font-bold gap-y-2`}>
            Summary
            <textarea
              placeholder="Write your summary here."
              className={`text-start h-56 border border-gray-400 text-base p-2 font-normal outline outline-0 focus:border-b-[4px] focus:border-b-[#003459]`}
            //   onChange={(Summary)=> handleChange({Summary})}
            />
          </lable>
        </div>
      </form>
    )
}