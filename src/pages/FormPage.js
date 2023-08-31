import FormPageHeader from "../components/formSections/FormPageHeader";
import { Outlet } from "react-router-dom";
import FormPageFooter from "../components/formSections/FormPageFooter";
import Template1 from "../templates/Template1";

const FormPage = () => {
  return (
    <div className="flex flex-col h-screen justify-between overflow-hidden">
      <div className="h-12">
        <FormPageHeader />
      </div>
      <div className="overflow-hidden flex px-10 h-full ">
        <div className='w-1/2 overflow-y-scroll '>
        <Outlet />
        </div>
        {/* <div className='my-auto h-full w-1/2 overflow-y-scroll overflow-x-hidden flex items-center justify-center'> */}
        <Template1/>
        {/* </div> */}
      </div>
      <div className="h-20">
        <FormPageFooter />
      </div>
    </div>
  );
};

export default FormPage;
