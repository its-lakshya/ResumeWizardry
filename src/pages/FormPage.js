import FormPageHeader from "../components/formSections/FormPageHeader";
import { Outlet } from "react-router-dom";
import FormPageFooter from "../components/formSections/FormPageFooter";


const FormPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <FormPageHeader/>
      <Outlet />
      <FormPageFooter/>      
    </div>
  );
};

export default FormPage;
