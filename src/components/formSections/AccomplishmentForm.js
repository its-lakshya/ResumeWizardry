import { useEffect } from "react";
import { CombinedSummary } from "./DifferentAddForms";
import { useDispatch } from "react-redux";
import { setNextRoute } from "../../store/RoutesSlice";
import useRouter from "./useRouter";

const AccomplishmentForm = () => {
  const data = ['', '', '', '', 'ad']
  const route = useRouter(data)

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(setNextRoute(route));
  }, [route]);

  return (
    <div className="py-10 min-h-[83vh] flex items-center">
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
