import { LinksSection } from "./DifferentAddForms";
import { useState } from "react";

const AddForm = () => {
  const [count, setCount] = useState(1);

  const [links, setLinks] = useState([
    <LinksSection key={count} value={count} />,
  ]);
  const [buttonVisibility, setButtonVisibility] = useState("");

  const handleClick = () => {
    if (count < 5) {
      setLinks((prev) => [
        ...prev,
        <LinksSection key={count + 1} value={count + 1} />,
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
          Websites, Portfolios, Profiles{" "}
          <span className="text-lg font-normal">
            We recommend adding social networks like Linkedin to your header, to
            help employers get to know you better.
          </span>
        </div>
        <div className = {``}>
          {links}
          <button
            onClick={handleClick}
            className={`text-[#EA4492] ${buttonVisibility} `}
          >
            + Add another skill
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AddForm;
