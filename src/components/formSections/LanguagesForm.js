import { LinksSection } from "./DifferentAddForms";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNextRoute } from "../../store/RoutesSlice";

const LanguagesForm = () => {
  const [count, setCount] = useState(1);
  const [buttonVisibility, setButtonVisibility] = useState("");
  const dispatch = useDispatch();

  const [links, setLinks] = useState([
    <LinksSection key={count} value={count} text={'language'}/>,
  ]);

  useEffect(() => {
    dispatch(setNextRoute("/build-resume/form/finalize/add-accomp"));
  });

  const handleClick = () => {
    if (count < 5) {
      setLinks((prev) => [
        ...prev,
        <LinksSection key={count + 1} value={count + 1} text={'language'} />,
      ]);
      setCount(count + 1);
      if (count === 4) {
        setButtonVisibility("hidden");
      }
    }
  };



  return (
    <div className="mx-10 py-10 min-h-[83vh] w-1/2 flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          Add languages you know{" "}
          <span className="text-lg font-normal">
          Include your native language and additional languages you speak.
          </span>
        </div>
        <div
          className={`w-full flex flex-col items-start justify-center gap-y-12`}
        >
          {links}
          <button
            onClick={handleClick}
            className={`text-[#EA4492] ${buttonVisibility} `}
          >
            + Add another language
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LanguagesForm;
