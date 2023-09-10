import { CombinedSummary } from "./DifferentAddForms";
import useRouter from "../../hooks/useRouter";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNextRoute } from "../../store/RoutesSlice";

const AdditionalInfoForm = () => {
  const data = ['', '', '', '', '', 'd']
  const route = useRouter(data)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setNextRoute(route));
  }, [route]);

  return (
    

    <div className="py-10 min-h-[83vh] flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          Additional Information{" "}
          <span className="text-lg font-normal">
            Add anything else you want employers to know.{" "}
          </span>
        </div>
        <CombinedSummary text={'additional information'}/>
      </div>
    </div>
  );
};

export default AdditionalInfoForm;
