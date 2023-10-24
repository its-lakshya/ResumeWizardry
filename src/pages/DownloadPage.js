import HomePageLandingButton from "../components/buttons/HomePageLandingButton";
import Template1 from "../templates/Template1"
import Template2 from "../templates/Template2"
import Template1img from "../assets/Template1.png"
import Template2img from "../assets/Template2.jpg"
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTemplate } from "../store/TemplateSlice";

const DownloadPage = () => {
  const [templateData, setTemplateData] = useState(
    useSelector((store) => store.templateSelection.template)
  );

  const createPdf = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4", true);
    const data = await html2canvas(document.querySelector("#resume"));
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");

    // const report = new jsPDF("p", "pt", "a4");
    // report.html(document.querySelector("#resume")).then(() => {
    //   report.save("resume.pdf");
    // });
    // console.log("apple");
  };

  const dispatch = useDispatch()

  const handleClick = (data)=> {
    dispatch(setTemplate(data))   
    setTemplateData(data)
  }

  return (
    <div className="flex flex-col">
      <div className="bg-[#003459] w-full h-12 bg-opacity-95 font-bold text-2xl text-white flex items-center px-48 max-lg:px-10">
        ResumeWisardry
      </div>
      <div className="px-48 flex flex-col gap-y-14 py-6 max-lg:px-10 max-lg:items-center">
        <div className="flex flex-col gap-y-3 ">
          <div className="text-[#003459] font-bold text-4xl max-lg:text-3xl max-lg:text-center max-sm:text-2xl">
            Awesome! your resume is magical{" "}
          </div>
          <div className="text-lg max-lg:text-base max-lg:text-center">
            Review and make final changes to your resume. Then download and
            apply for jobs!
          </div>
        </div>
        <div className="flex gap-x-20 w-full max-lg:flex-col max-lg:items-center max-lg:gap-y-12">
          <div className="max-md:scale-75 max-md:-mt-28 max-sm:scale-50 max-sm:-mt-[14rem]">
          {templateData === "Template1" && <Template1 />}
          {templateData === "Template2" && <Template2 />}
          </div>
          <div className="flex flex-col w-1/2 gap-y-10 max-lg:w-full max-lg:items-center max-md:-mt-28 max-sm:-mt-[14rem]">
            <div className="cursor-pointer" onClick={() => createPdf()}>
              <HomePageLandingButton
                bgColor="bg-[#EA4492]"
                textColor="text-white"
                hoverColor="bg-[#FF9CDA]"
                hoverBorderColor="border-[#FF9CDA]"
                text="Download ↓"
                height="h-[3.5rem] max-sm:h-[3.2rem]"
                width="w-full max-lg:w-80 max-sm:w-56"
              />
            </div>
            {/* <div className="max-"> */}
              <div className="uppercase font-semibold text-lg flex flex-col justify-center items-center gap-y-4 max-lg:w-full">
                More Templates
                <div className="border h-96 max-sm:h-auto w-full flex items-center justify-evenly max-sm:flex-col max-sm:gap-y-8 max-sm:py-4 ">
                    <div
                      className="w-40 h-56 bg-no-repeat bg-center bg-contain hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-gray-400"
                      style={{ backgroundImage: `url(${Template1img})` }}
                      onClick={() => handleClick("Template1")}
                    ></div>
                    <div
                      className="w-40 h-56 bg-no-repeat bg-center bg-contain hover:scale-105 cursor-pointer hover:shadow-xl hover:shadow-gray-400"
                      style={{ backgroundImage: `url(${Template2img})` }}
                      onClick={() => handleClick("Template2")}
                    ></div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
