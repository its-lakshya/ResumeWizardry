const SkillForm = () => {
    const lableClassNames =
      "flex flex-col w-[47%] text-[0.63rem] uppercase font-bold gap-y-2";
    const inputClassNames =
      "h-10 border border-gray-400 text-base p-2 font-normal outline outline-0 focus:border-b-[2.3px] focus:border-b-[#003459] ";

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