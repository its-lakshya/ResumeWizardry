import { configureStore } from "@reduxjs/toolkit";
import FormPageHeaderSlice from "./FormPageHeaderSlice";
import ContactFormSlice from "./ContactFormSlice";
import EducationFormSlice from "./EducationFormSlice";
import ExperienceFormSlice from "./ExperienceFormSlice";
import SkillFormSlice from "./SkillFormSlice";
import SummaryFormSlice from "./SummaryFormSlice";

const Store =  configureStore({
    reducer : {
        styleSection: FormPageHeaderSlice,
        contactDetails:ContactFormSlice,
        educationDetails:EducationFormSlice,
        experienceDetails:ExperienceFormSlice,
        skillDetails:SkillFormSlice,
        summaryDetails:SummaryFormSlice
    }
})

export default Store;