import { createSlice } from "@reduxjs/toolkit";

const FormPageHeaderSlice = createSlice({
    name:'styleSection',
    initialState: {
        Section:'',
    }, 
    reducers: {
        addStyleSection: (state, action) =>{
            state.Section=action.payload
        },
    }
})

export const {addStyleSection} = FormPageHeaderSlice.actions
export default FormPageHeaderSlice.reducer