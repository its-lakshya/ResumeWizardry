import { configureStore } from "@reduxjs/toolkit";
import FormPageHeaderSlice from "./FormPageHeaderSlice";
import ContactFormSlice from "./ContactFormSlice";
import EducationFormSlice from "./EducationFormSlice";
import ExperienceFormSlice from "./ExperienceFormSlice";
import SkillFormSlice from "./SkillFormSlice";
import SummaryFormSlice from "./SummaryFormSlice";
import AddSectionSlice from "./AddSectionSlice";

const Store =  configureStore({
    reducer : {
        styleSection: FormPageHeaderSlice,
        contactDetails:ContactFormSlice,
        educationDetails:EducationFormSlice,
        experienceDetails:ExperienceFormSlice,
        skillDetails:SkillFormSlice,
        summaryDetails:SummaryFormSlice,
        sectionSelectionDetails:AddSectionSlice
    }
})

export default Store;