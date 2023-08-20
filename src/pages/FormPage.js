import FormPageHeader from "../components/formSections/FormPageHeader";
import { Outlet } from "react-router-dom";
import FormPageFooter from "../components/formSections/FormPageFooter";

const FormPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between overflow-hidden">
      <div className="h-12">
        <FormPageHeader />
      </div>
      <div className="h-[84vh] overflow-y-scroll">
        <Outlet />
      </div>
      <div className="h-20">
        <FormPageFooter />
      </div>
    </div>
  );
};

export default FormPage;
