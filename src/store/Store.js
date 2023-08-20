import { configureStore } from "@reduxjs/toolkit";
import FormPageHeaderSlice from "./FormPageHeaderSlice";

const Store =  configureStore({
    reducer : {
        styleSection: FormPageHeaderSlice,
    }
})

export default Store;