import { useEffect } from "react";
import { CombinedSummary } from "./DifferentAddForms";
import { useDispatch } from "react-redux";
import { setNextRoute } from "../../store/RoutesSlice";

const AccomplishmentForm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNextRoute("/build-resume/form/finalize/add-addInfo"));
  }, []);

  return (
    <div className="mx-10 py-10 min-h-[83vh] w-1/2 flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          Tell us about your accomplishments{" "}
          <span className="text-lg font-normal">
            {/* Add anything else you want employers to know.{" "} */}
          </span>
        </div>
        <CombinedSummary text={"accomplishments"} />
      </div>
    </div>
  );
};

export default AccomplishmentForm;
