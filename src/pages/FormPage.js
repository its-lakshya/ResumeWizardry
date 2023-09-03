import FormPageHeader from "../components/formSections/FormPageHeader";
import { Outlet } from "react-router-dom";
import FormPageFooter from "../components/formSections/FormPageFooter";
import Template1 from "../templates/Template1";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const FormPage = () => {

  const createPdf = async () => {
    // const pdf = new jsPDF("portrait", "pt", "a4", true); 
    // const data = await html2canvas(document.querySelector("#resume")); 
    // const img = data.toDataURL("image/png");
    // const imgProperties = pdf.getImageProperties(img);
    // const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    // pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    // pdf.save("shipping_label.pdf");

    const report = new jsPDF('p','pt','a4');
    report.html(document.querySelector('#resume')).then(() => {
        report.save('resume.pdf');
    })
  }

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
            <button onClick={()=> createPdf()}>download </button>
        <FormPageFooter />
      </div>
    </div>
  );
};

export default FormPage;
