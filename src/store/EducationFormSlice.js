import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    instituteName:'',
    instituteLocation:'',
    degree:'',
    fieldofStudy:'',
    graduationStart:'',
    graduationEnd:'',
}
const EducationStoreSlice = createSlice({
    name:'educationDetails',
    initialState,

    reducers:{
        storeInstituteName:(state, action) => {
            state.instituteName=action.payload
        },
        storeInstituteLocation:(state, action) => {
            state.instituteLocation=action.payload
        },
        storeDegree:(state, action) => {
            state.degree=action.payload
        },
        storeFieldofStudy:(state, action) => {
            state.fieldofStudy=action.payload
        },
        storeGraduactionStart:(state, action) => {
            state.graduationStart=action.payload
        },
        storeGraduationEnd:(state, action) => {
            state.graduationEnd=action.payload
        },
    }
})


export const {storeInstituteName, storeInstituteLocation, storeDegree, storeFieldofStudy, storeGraduactionStart, storeGraduationEnd} = EducationStoreSlice.actions
export default EducationStoreSlice.reducer;