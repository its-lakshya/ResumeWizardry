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
import { useDispatch } from "react-redux";

const ExperienceForm = ({value}) => {

  const dispatch = useDispatch()

  const handleChange = ({
    Title,
    Organization,
    City,
    Country,
    Start,
    End,
    description1,
    description2,
    description3,
    description4,
    description5,
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
    if(description1){
      dispatch(storeDescription({count:value, number:'a' , data:description1.target.value}))
    }
    if(description2){
      dispatch(storeDescription({count:value, number:'b' , data:description2.target.value}))
    }
    if(description3){
      dispatch(storeDescription({count:value, number:'c' , data:description3.target.value}))
    }
    if(description4){
      dispatch(storeDescription({count:value, number:'d' , data:description4.target.value}))
    }
    if(description5){
      dispatch(storeDescription({count:value, number:'e' , data:description5.target.value}))
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
          />
        </label>
        <label className={labelClassNames}>
          who did you this for?
          <input
            placeholder="Person, organization, company name."
            className={inputClassNames}
            onChange={(Organization) => handleChange({ Organization })}
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
          />
        </label>
        <label className={labelClassNames}>
          country
          <input
            placeholder="India"
            className={inputClassNames}
            onChange={(Country) => handleChange({ Country })}
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
          />
        </label>
        <label className={labelClassNames}>
          end date
          <input
            type="month"
            placeholder="end"
            className={inputClassNames}
            onChange={(End) => handleChange({ End })}
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
          />
          <input
            className={inputClassNames}
            onChange={(description2) => handleChange({ description2 })}
          />
          <input
            className={inputClassNames}
            onChange={(description3) => handleChange({ description3 })}
          />
          <input
            className={inputClassNames}
            onChange={(description4) => handleChange({ description4 })}
          />
          <input
            className={inputClassNames}
            onChange={(description5) => handleChange({ description5 })}
          />
        </label>
      </div>

      <hr className='border-t border-gray-500'></hr>
    </form>
  );
};

export default ExperienceForm;
