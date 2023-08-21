import {
  storeName,
  storeSurname,
  storeCity,
  storeCountry,
  storePhone,
  storeEmail,
  storeState,
  storePinCode,
} from "../../store/ContactFormSlice";
import { labelClassNames, inputClassNames } from "./ConstantClassNames";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleChange = ({
    Name,
    Surname,
    City,
    Country,
    Phone,
    Email,
    State,
    Pincode,
  }) => {
    if (Name) {
      dispatch(storeName(Name.target.value));
    }
    if (Surname) {
      dispatch(storeSurname(Surname.target.value));
    }
    if (City) {
      dispatch(storeCity(City.target.value));
    }
    if (Country) {
      dispatch(storeCountry(Country.target.value));
    }
    if (Phone) {
      dispatch(storePhone(Phone.target.value));
    }
    if (Email) {
      dispatch(storeEmail(Email.target.value));
    }
    if (State) {
      dispatch(storeState(State.target.value));
    }
    if (Pincode) {
      dispatch(storePinCode(Pincode.target.value));
    }
  };

  return (
    <form className="flex flex-col h-4/5 w-full  gap-y-4 ">
      <div className="flex justify-between  ">
        <label className={labelClassNames}>
          name
          <input
            placeholder="John"
            className={inputClassNames}
            onChange={(Name) => handleChange({ Name })}
          />
        </label>
        <label className={labelClassNames}>
          surname
          <input
            placeholder="Doe"
            className={inputClassNames}
            onChange={(Surname) => handleChange({ Surname })}
          />
        </label>
      </div>

      <div className="flex justify-between">
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
          Phone
          <input
            placeholder="+91 9456230481"
            className={inputClassNames}
            onChange={(Phone) => handleChange({ Phone })}
          />
        </label>
        <label className={labelClassNames}>
          Email
          <input
            placeholder="doe@gmail.com"
            className={inputClassNames}
            onChange={(Email) => handleChange({ Email })}
          />
        </label>
      </div>

      <div className="flex justify-between  ">
        <label className={labelClassNames}>
          State
          <input
            placeholder="UttarPradesh"
            className={inputClassNames}
            onChange={(State) => handleChange({ State })}
          />
        </label>
        <label className={labelClassNames}>
          Pin Code
          <input
            placeholder="110034"
            className={inputClassNames}
            onChange={(Pincode) => handleChange({ Pincode })}
          />
        </label>
      </div>
    </form>
  );
};

export default ContactForm;
