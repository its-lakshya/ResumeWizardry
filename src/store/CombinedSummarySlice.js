import { createSlice } from "@reduxjs/toolkit";


const initialState={
    certifications:'',
    accomplishments:'',
    additionalInfo:''
}

const CombinedSummarySlice = createSlice({
    name:'combinedSummaryDetails',
    initialState, 


    reducers:{
        storeCertifications:(state, action)=> {
            state.certifications=action.payload
        },
        storeAccomplishments:(state, action)=> {
            state.accomplishments= action.payload
        },
        storeAdditionalInfo:(state, action)=> {
            state.additionalInfo= action.payload
        },
    }
})


export const {storeCertifications, storeAccomplishments, storeAdditionalInfo} = CombinedSummarySlice.actions
export default CombinedSummarySlice.reducer