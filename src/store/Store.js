import { configureStore } from "@reduxjs/toolkit";
import FormPageHeaderSlice from "./FormPageHeaderSlice";
import ContactFormSlice from "./ContactFormSlice";
import EducationFormSlice from "./EducationFormSlice";

const Store =  configureStore({
    reducer : {
        styleSection: FormPageHeaderSlice,
        contactDetails:ContactFormSlice,
        educationDetails:EducationFormSlice,
    }
})

export default Store;