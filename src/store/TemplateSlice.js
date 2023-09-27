import { createSlice } from "@reduxjs/toolkit";

const getLocalStorageData =
  localStorage.getItem("localStorageData") !== null
    ? JSON.parse(localStorage.getItem("localStorageData"))
    : null;

const TemplateSlice = createSlice({
    name:'templateSelection',
    initialState:{
        template:getLocalStorageData,
    },

    reducers:{
        setTemplate:(state, action)=>{
            state.template=action.payload
            localStorage.setItem("localStorageData", JSON.stringify(state.template));

        }
    }
})

export const {setTemplate} = TemplateSlice.actions;
export default TemplateSlice.reducer;