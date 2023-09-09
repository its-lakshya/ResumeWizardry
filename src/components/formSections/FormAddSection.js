import { Outlet } from "react-router-dom";
import AddSectionForm from "./AddSectionForm";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addStyleSection } from "../../store/FormPageHeaderSlice";
import { setNextRoute } from "../../store/RoutesSlice";
import useRouter from "./useRouter";

const FormAddSection = () => {
  const data = ['w', 'c', 'l', 'ac', 'ad', 'd']
  const dispatch = useDispatch();
  const route = useRouter(data);
  
  useEffect(() => {   
    dispatch(setNextRoute('/build-resume/form/download')) 
    dispatch(addStyleSection("finalize"));
    dispatch(setNextRoute(route));

  },[route]);

  return (
    <div className="my-0 min-h-[83vh] flex  items-center ">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-start items-start gap-y-12">
        <div className="font-bold text-3xl text-black flex flex-col gap-y-3">
          Do you have anything else to add?{" "}
          <span className="text-lg font-normal">
            These sections are optional.
          </span>
        </div>

        <div className="flex flex-col gap-y-8">
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text="website" />
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text="certifications" />
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text={"languages"} />
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text="accomplishments" />
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text="addtionalInformation" />
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default FormAddSection;
