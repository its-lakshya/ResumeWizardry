import { labelClassNames, inputClassNames } from "./ConstantClassNames";
import { useDispatch } from "react-redux";
import { storeLangs, storeLinks } from "../../store/LinksLangSlice";
import { storeAccomplishments, storeAdditionalInfo, storeCertifications } from "../../store/CombinedSummarySlice";

export const LinksSection = ({text, value}) => {

  const dispatch = useDispatch()

  const handleChange = ({Lang}) => {
    if(text==='links/url'){
      dispatch(storeLinks({type:value, data:Lang.target.value}))
    }
    else if (text==='language'){
      dispatch(storeLangs({type:value, data:Lang.target.value}))
    }
  }

    return(
      <form className="flex flex-col w-full  gap-y-4 ">
          <div className="flex justify-between   ">
            <label className={labelClassNames}>
              {text}
              <input
                placeholder={`Add your ${text} here.`}
                className={inputClassNames}
                onChange={(Lang) => handleChange({Lang})}
              />
            </label>
          </div>
        </form>
    )
  }


export const CombinedSummary = ({text}) =>  {
  
  const dispatch = useDispatch()

  const handleChange = ({data}) => {
    if(text==='certifications'){
      dispatch(storeCertifications(data.target.value))
    }
    if(text==='accomplishments'){
      dispatch(storeAccomplishments(data.target.value))
    }
    if(text==='additional information'){
      dispatch(storeAdditionalInfo(data.target.value))
    }
  }

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
            onChange={(data)=>handleChange({data})}
          />
        </label>
      </div>
    </form>
    )
}