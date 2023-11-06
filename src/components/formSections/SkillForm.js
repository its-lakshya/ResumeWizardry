import { labelClassNames, inputClassNames } from "./ConstantClassNames";
import { storeSkill } from "../../store/SkillFormSlice";
import { useDispatch, useSelector } from "react-redux";

const SkillForm = ({ value }) => {
  const dispatch = useDispatch();
  const SkillDetails = useSelector((store) => store.skillDetails);

  const handleChange = ({ Skill }) => {
    dispatch(storeSkill({ count: value, data: Skill.target.value }));
  };

  return (
    <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between   ">
        <label className={labelClassNames}>
          skill : {value}
          <input
            placeholder="Add your skill here."
            className={inputClassNames}
            onChange={(Skill) => handleChange({ Skill })}
            value={SkillDetails.skill[value]}
          />
        </label>
      </div>
    </form>
  );
};

export default SkillForm;
