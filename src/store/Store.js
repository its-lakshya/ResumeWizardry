import { configureStore } from "@reduxjs/toolkit";
import FormPageHeaderSlice from "./FormPageHeaderSlice";
import ContactFormSlice from "./ContactFormSlice";

const Store =  configureStore({
    reducer : {
        styleSection: FormPageHeaderSlice,
        contactDetails:ContactFormSlice,
    }
})

export default Store;