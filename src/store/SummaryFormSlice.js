import { createSlice } from "@reduxjs/toolkit";

const SummaryFormSlice = createSlice({
    name:'summaryDetails',
    initialState:{
        summary:''
    },

    reducers:{
        storeSummary:(state, action)=> {
            state.summary=action.payload
        }
    }
})


export const {storeSummary} = SummaryFormSlice.actions
export default SummaryFormSlice.reducer