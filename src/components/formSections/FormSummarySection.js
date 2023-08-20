import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addStyleSection } from "../../store/FormPageHeaderSlice";

const FormSummarySection = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addStyleSection('summary'))
    
    return () => {
      dispatch(addStyleSection())
    }
    
  }, [])

  return (
    <div className="mx-10 py-10 min-h-[83vh] w-1/2 flex items-center">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-center items-start gap-y-12">
        <div className="font-bold text-4xl text-black flex flex-col gap-y-3">
          Briefly tell us about yourself{" "}
          <span className="text-lg font-normal">
            Your summary shows employers you’re right for their job.{" "}
          </span>
        </div>
        <form className="flex flex-col w-full  gap-y-4 ">
        <div className="flex justify-between   ">
          <lable className={`flex flex-col w-full text-[0.63rem] uppercase font-bold gap-y-2`}>
            Summary
            <textarea
              placeholder="Write your summary here."
              className={`text-start h-56 border border-gray-400 text-base p-2 font-normal outline outline-0 focus:border-b-[4px] focus:border-b-[#003459]`}
            />
          </lable>
        </div>
      </form>
      </div>
      <div></div>
    </div>
  );
};

export default FormSummarySection;
