import FormPageHeader from "../components/formSections/FormPageHeader";
import { Outlet } from "react-router-dom";
import FormPageFooter from "../components/formSections/FormPageFooter";
import Template1 from "../templates/Template1";
import Template2 from "../templates/Template2";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FormPage = () => {
  // console.log(data)

  const [template, setTemplate] = useState(useSelector((store)=> store.templateSelection.template));

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
    <div className="flex flex-col h-screen justify-between overflow-hidden ">
      <div className="h-12 ">
        <FormPageHeader />
      </div>
      <div className="overflow-hidden flex px-10 justify-evenly ">
        <div className="w-1/2 overflow-y-scroll ">
          <Outlet />
        </div>
        <div className="my-6 flex justify-center overflow-y-scroll overflow-x-hidden">
          {template==='Template1' && <Template1/>}
          {template==='Template2' && <Template2/>}
        </div>
      </div>
      <div className="h-20">
        <FormPageFooter />
      </div>
    </div>
  );
};

export default FormPage;
