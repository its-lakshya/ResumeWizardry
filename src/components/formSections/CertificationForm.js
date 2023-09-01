import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNextRoute } from "../../store/RoutesSlice";
import { CombinedSummary } from "./DifferentAddForms";
import useRouter from "./useRouter";

const CertificationForm = () => {
  const data = ["", "", "l", "ac", "ad"];
  const route = useRouter(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNextRoute(route));

  },[route]);

  return (
    <div className="py-10 min-h-[83vh] flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          What certifications do you have?{" "}
          <span className="text-lg font-normal">
            {/* Your summary shows employers you’re right for their job.{" "} */}
          </span>
        </div>
        <CombinedSummary text={"certifications"} />
      </div>
      <div></div>
    </div>
  );
};

export default CertificationForm;
