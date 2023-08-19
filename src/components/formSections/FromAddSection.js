import { useState } from "react";
import AddSectionForm from "./AddSectionForm";

const FormAddSection = () => {
  return (
    <div className="mx-10 my-0 min-h-[83vh] w-1/2  flex items-center ">
      <div className="min-h-4/5 w-[95%] flex flex-col justify-start items-start gap-y-12">
        <div className="font-semibold text-3xl text-black flex flex-col gap-y-3">
          Do you have anything else to add?{" "}
          <span className="text-lg font-normal">
            These sections are optional.
          </span>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text='Websites, Portfolios, Profiles' /> 
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text='Certifications' /> 
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text={'Languages'} /> 
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text='Accomplishments' /> 
          </div>
          <div className="flex items-center gap-x-6 text-lg">
            <AddSectionForm text='Additional Information'/> 
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FormAddSection;
