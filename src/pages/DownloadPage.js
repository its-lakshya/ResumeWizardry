import HomePageLandingButton from "../components/buttons/HomePageLandingButton";
import Template1 from "../templates/Template1";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const DownloadPage = () => {

    


  return (
    <div className="flex flex-col">
      <div className="bg-[#003459] w-full h-12 bg-opacity-95 font-bold text-2xl text-white flex items-center px-48">
        ResumeWisardry
      </div>
      <div className="px-48  flex flex-col gap-y-14 py-6">
        <div className="flex flex-col gap-y-3 ">
          <div className="text-[#003459] font-bold text-4xl ">
            Awesome! your resume is magical{" "}
          </div>
          <div className="text-lg">
            Review and make final changes to your resume. Then download and
            apply for jobs!
          </div>
        </div>
        <div className="flex gap-x-20 w-full ">
          <Template1 />
          <div className="flex flex-col w-1/2 gap-y-10">
            <div className="cursor-pointer" >
              <HomePageLandingButton
                bgColor="bg-[#EA4492]"
                textColor="text-white"
                hoverColor="bg-[#FF9CDA]"
                hoverBorderColor="border-[#FF9CDA]"
                text="Download ↓"
                height="h-[3.5rem]"
                width="w-full"
                
              />
            </div>
            <div>
              <div className="uppercase font-semibold text-lg flex justify-center">
                More Templates
              </div>
              {/* <div className="">
                <Template1 />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
