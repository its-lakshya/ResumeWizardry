import FormPageHeader from "../components/formSections/FormPageHeader";
import { Outlet } from "react-router-dom";
import FormPageFooter from "../components/formSections/FormPageFooter";
import Template1 from "../templates/Template1";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const FormPage = () => {


  return (
    <div className="flex flex-col h-screen justify-between overflow-hidden ">
      <div className="h-12 ">
        <FormPageHeader />  
      </div>
      <div className="overflow-hidden flex px-10 justify-evenly ">
        <div className="w-1/2 overflow-y-scroll ">
          <Outlet />
        </div>
        <div className="my-6 flex justify-center overflow-y-scroll overflow-x-hidden"  >
            <Template1  />
        </div>
      </div>
      <div className="h-20">
            {/* <button onClick={()=> createPdf()}> download </button> */}
        <FormPageFooter />
      </div>
    </div>
  );
};

export default FormPage;
