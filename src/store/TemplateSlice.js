import { createSlice } from "@reduxjs/toolkit";

const TemplateSlice = createSlice({
    name:'templateSelection',
    initialState:{
        template:'',
    },

    reducers:{
        setTemplate:(state, action)=>{
            state.template=action.payload
        }
    }
})

export const {setTemplate} = TemplateSlice.actions;
export default TemplateSlice.reducer;