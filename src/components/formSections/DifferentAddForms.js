import { labelClassNames, inputClassNames } from "./ConstantClassNames";
import { useDispatch } from "react-redux";
import { storeLangs, storeLinks } from "../../store/LinksLangSlice";
import {
  storeAccomplishments,
  storeAdditionalInfo,
  storeCertifications,
} from "../../store/CombinedSummarySlice";
import { useSelector } from "react-redux";

export const LinksSection = ({ text, value }) => {
  const dispatch = useDispatch();
  const linksDetails = useSelector((store) => store.linksLangDetails);

  const handleChange = ({ Lang }) => {
    if (text === "links/url") {
      dispatch(storeLinks({ type: value, data: Lang.target.value }));
    } else if (text === "language") {
      dispatch(storeLangs({ type: value, data: Lang.target.value }));
    }
  };

  return (
    <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between   ">
        <label className={labelClassNames}>
          {text}
          <input
            placeholder={`Add your ${text} here.`}
            className={inputClassNames}
            onChange={(Lang) => handleChange({ Lang })}
            value={linksDetails.link[value-1]}
          />
        </label>
      </div>
    </form>
  );
};


export const LangSection = ({ text, value }) => {
  const dispatch = useDispatch();
  const linksDetails = useSelector((store) => store.linksLangDetails);
  console.log(value)

  const handleChange = ({ Lang }) => {
    if (text === "links/url") {
      dispatch(storeLinks({ type: value, data: Lang.target.value }));
    } else if (text === "language") {
      dispatch(storeLangs({ type: value, data: Lang.target.value }));
    }
  };

  return (
    <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between   ">
        <label className={labelClassNames}>
          {text}
          <input
            placeholder={`Add your ${text} here.`}
            className={inputClassNames}
            onChange={(Lang) => handleChange({ Lang })}
            value={linksDetails.lang[value-1]}
          />
        </label>
      </div>
    </form>
  );
};


export const Certifications = ({ text }) => {
  const dispatch = useDispatch();
  const combinedSummaryDetails = useSelector(
    (store) => store.combinedSummaryDetails
  );

  const handleChange = ({ data }) => {
      dispatch(storeCertifications(data.target.value));
    
  };

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
            onChange={(data) => handleChange({ data })}
            value={combinedSummaryDetails.certifications}
          />
        </label>
      </div>
    </form>
  );
};

export const Accomplishments = ({ text }) => {
  const dispatch = useDispatch();
  const combinedSummaryDetails = useSelector(
    (store) => store.combinedSummaryDetails
  );

  const handleChange = ({ data }) => {
    dispatch(storeAccomplishments(data.target.value));
  };

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
            onChange={(data) => handleChange({ data })}
            value={combinedSummaryDetails.accomplishments}
          />
        </label>
      </div>
    </form>
  );
};

export const AddInfo = ({ text }) => {
  const dispatch = useDispatch();
  const combinedSummaryDetails = useSelector(
    (store) => store.combinedSummaryDetails
  );

  const handleChange = ({ data }) => {
    dispatch(storeAdditionalInfo(data.target.value));
  };

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
            onChange={(data) => handleChange({ data })}
            value={combinedSummaryDetails.additionalInfo}
          />
        </label>
      </div>
    </form>
  );
};
