import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNextRoute } from "../../store/RoutesSlice";
import { CombineSummary } from "./DifferentAddForms";

const CertificationForm = () => {

    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(setNextRoute('/build-resume/form/finalize/add-lang'))
    })


  return (
    <div className="mx-10 py-10 min-h-[83vh] w-1/2 flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          What certifications do you have?{" "}
          <span className="text-lg font-normal">
            {/* Your summary shows employers you’re right for their job.{" "} */}
          </span>
        </div>
        <CombineSummary text={'certification'}/>
      </div>
      <div></div>
    </div>
  );
};

export default CertificationForm;
