import FormPageHeader from "../components/formSections/FormPageHeader";
import { Outlet } from "react-router-dom";
import FormPageFooter from "../components/formSections/FormPageFooter";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FormPage = () => {
  const [template, setTemplate] = useState(
    useSelector((store) => store.templateSelection.template)
  );

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "something";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  return (
    <div className="flex flex-col h-screen justify-between max-lg:h-auto">
      <div className="h-12 ">
        <FormPageHeader />
      </div>
      <div className="overflow-hidden h-auto flex px-4 justify-evenly max-lg:flex-col-reverse max-lg:items-center max-md:justify-start">
        <div className="w-1/2 overflow-y-scroll max-lg:w-full max-lg:overflow-y-hidden max-md:h-full max-sm:-mt-48 ">
          <Outlet />
        </div>
        <div
          className="my-6 max-md:my-2 flex justify-center overflow-y-scroll overflow-x-hidden shrink-0 max-lg:overflow-y-hidden 
        max-md:scale-75 max-sm:scale-50 max-md:mt-0 max-sm:-mt-48"
        >
          {template === "Template1" && <Template1 />}
          {template === "Template2" && <Template2 />}
        </div>
      </div>
      <div className="h-20">
        <FormPageFooter />
      </div>
    </div>
  );
};

export default FormPage;
