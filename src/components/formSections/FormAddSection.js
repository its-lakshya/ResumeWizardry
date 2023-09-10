import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addStyleSection } from "../../store/FormPageHeaderSlice";
import { setNextRoute } from "../../store/RoutesSlice";
import useRouter from "../../hooks/useRouter";
import { BsCheckLg } from "react-icons/bs";
import { storeSectionSelection } from "../../store/AddSectionSlice";

const FormAddSection = () => {
  const data = ["w", "c", "l", "ac", "ad", "d"];
  const dispatch = useDispatch();
  const route = useRouter(data);
  const [isCheckVisibleWebsite, setIsCheckVisibleWebsite] = useState("");
  const [isCheckVisibleCertifications, setIsCheckVisibleCertifications] = useState("");
  const [isCheckVisibleLanguages, setIsCheckVisibleLanguages] = useState("");
  const [isCheckVisibleAccomplishments, setIsCheckVisibleAccomplishments] = useState("");
  const [isCheckVisibleAddInfo, setIsCheckVisibleAddInfo] = useState("");
  const store = useSelector((store) => store.sectionSelectionDetails);

  useEffect(() => {
    dispatch(setNextRoute("/build-resume/form/download"));
    dispatch(addStyleSection("finalize"));
    dispatch(setNextRoute(route));
    setIsCheckVisibleWebsite(store.websiteTick);
    setIsCheckVisibleCertifications(store.certificationsTick);
    setIsCheckVisibleLanguages(store.languagesTick);
    setIsCheckVisibleAccomplishments(store.accomplishmentsTick);
    setIsCheckVisibleAddInfo(store.additionalInformationTick);
  }, [route, store]);

  const handleClick = (text) => {
    dispatch(storeSectionSelection(text));
  };

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
            <div className="flex items-center gap-x-6">
              <div
                className={`w-6 h-6 cursor-pointer border border-gray-500 flex items-center justify-center  [&>*]:text-2xl [&>*]:text-[#003459]`}
                onClick={() => handleClick("website")}
              >
                <BsCheckLg className={`${isCheckVisibleWebsite}`} />
              </div>
              website, portfolio, links
            </div>
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <div className="flex items-center gap-x-6">
              <div
                className={`w-6 h-6 cursor-pointer border border-gray-500 flex items-center justify-center  [&>*]:text-2xl [&>*]:text-[#003459]`}
                onClick={() => handleClick("certifications")}
              >
                <BsCheckLg className={`${isCheckVisibleCertifications}`} />
              </div>
              certifications
            </div>
          </div>
          <div className="flex items-center gap-x-6 text-lg">
          <div className="flex items-center gap-x-6">
              <div
                className={`w-6 h-6 cursor-pointer border border-gray-500 flex items-center justify-center  [&>*]:text-2xl [&>*]:text-[#003459]`}
                onClick={() => handleClick("languages")}
              >
                <BsCheckLg className={`${isCheckVisibleLanguages}`} />
              </div>
              languages
            </div>
          </div>
          <div className="flex items-center gap-x-6 text-lg">
          <div className="flex items-center gap-x-6">
              <div
                className={`w-6 h-6 cursor-pointer border border-gray-500 flex items-center justify-center  [&>*]:text-2xl [&>*]:text-[#003459]`}
                onClick={() => handleClick("accomplishments")}
              >
                <BsCheckLg className={`${isCheckVisibleAccomplishments}`} />
              </div>
              accomplishments
            </div>
          </div>
          <div className="flex items-center gap-x-6 text-lg">
          <div className="flex items-center gap-x-6">
              <div
                className={`w-6 h-6 cursor-pointer border border-gray-500 flex items-center justify-center  [&>*]:text-2xl [&>*]:text-[#003459]`}
                onClick={() => handleClick("addtionalInformation")}
              >
                <BsCheckLg className={`${isCheckVisibleAddInfo}`} />
              </div>
              Additional information
            </div>
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
