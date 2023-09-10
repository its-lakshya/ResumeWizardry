import { labelClassNames, inputClassNames } from "./ConstantClassNames";
import {
  storeTitle,
  storeOrganization,
  storeCity,
  storeCountry,
  storeStart,
  storeEnd,
  storeDescription,
} from "../../store/ExperienceFormSlice";
import { useDispatch, useSelector } from "react-redux";

const ExperienceForm = ({value}) => {

  const ExperienceDetails =  useSelector((store) => store.experienceDetails)
  const dispatch = useDispatch()

  const handleChange = ({
    Title,
    Organization,
    City,
    Country,
    Start,
    End,
    description0,
    description1,
    description2,
    description3,
    description4,
  }) => {
    if(Title){
      dispatch(storeTitle({count:value , data:Title.target.value}))
    }
    if(Organization){
      dispatch(storeOrganization({count:value , data:Organization.target.value}))
    }
    if(City){
      dispatch(storeCity({count:value , data:City.target.value}))
    }
    if(Country){
      dispatch(storeCountry({count:value , data:Country.target.value}))
    }
    if(Start){
      dispatch(storeStart({count:value , data:Start.target.value}))
    }
    if(End){
      dispatch(storeEnd({count:value , data:End.target.value}))
    }
    if(description0){
      dispatch(storeDescription({count:value, number:0 , data:description0.target.value}))
    }
    if(description1){
      dispatch(storeDescription({count:value, number:1 , data:description1.target.value}))
    }
    if(description2){
      dispatch(storeDescription({count:value, number:2 , data:description2.target.value}))
    }
    if(description3){
      dispatch(storeDescription({count:value, number:3 , data:description3.target.value}))
    }
    if(description4){
      dispatch(storeDescription({count:value, number:4 , data:description4.target.value}))
    }
  };

  return (
    <form className="flex flex-col w-full  gap-y-4 ">
      <div className="flex justify-between   ">
        <label className={labelClassNames}>
          What was your title?
          <input
            placeholder="Similar to the tile that best describes you."
            className={inputClassNames}
            onChange={(Title) => handleChange({ Title })}
            value={ExperienceDetails.title[value]}
            />
        </label>
        <label className={labelClassNames}>
          who did you this for?
          <input
            placeholder="Person, organization, company name."
            className={inputClassNames}
            onChange={(Organization) => handleChange({ Organization })}
            value={ExperienceDetails.organization[value]}
            />
        </label>
      </div>

      <div className="flex justify-between   ">
        <label className={labelClassNames}>
          city
          <input
            placeholder="New Delhi"
            className={inputClassNames}
            onChange={(City) => handleChange({ City })}
            value={ExperienceDetails.city[value]}
            />
        </label>
        <label className={labelClassNames}>
          country
          <input
            placeholder="India"
            className={inputClassNames}
            onChange={(Country) => handleChange({ Country })}
            value={ExperienceDetails.country[value]}
            />
        </label>
      </div>

      <div className="flex justify-between ">
        <label className={labelClassNames}>
          start date
          <input
            type="month"
            placeholder="start"
            className={inputClassNames}
            onChange={(Start) => handleChange({ Start })}
            value={ExperienceDetails.start[value]}
            />
        </label>
        <label className={labelClassNames}>
          end date
          <input
            type="month"
            placeholder="end"
            className={inputClassNames}
            onChange={(End) => handleChange({ End })}
            value={ExperienceDetails.end[value]}
            />
        </label>
      </div>

      <div>
        <label
          className={`flex flex-col w-full text-[0.63rem] uppercase font-bold gap-y-2`}
        >
          Nice! Now let's describe what you did
          <input
            className={inputClassNames}
            onChange={(description1) => handleChange({ description1 })}
            value={ExperienceDetails.description[value][0]}
            />
          <input
            className={inputClassNames}
            onChange={(description2) => handleChange({ description2 })}
            value={ExperienceDetails.description[value][1]}
            />
          <input
            className={inputClassNames}
            onChange={(description3) => handleChange({ description3 })}
            value={ExperienceDetails.description[value][2]}
            />
          <input
            className={inputClassNames}
            onChange={(description4) => handleChange({ description4 })}
            value={ExperienceDetails.description[value][3]}
            />
          <input
            className={inputClassNames}
            onChange={(description5) => handleChange({ description5 })}
            value={ExperienceDetails.description[value][4]}
          />
        </label>
      </div>

      <hr className='border-t border-gray-500'></hr>
    </form>
  );
};

export default ExperienceForm;
