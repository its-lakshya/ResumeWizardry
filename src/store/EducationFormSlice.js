import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instituteName1: "",
  instituteLocation1: "",
  degree1: "",
  fieldofStudy1: "",
  graduationStart1: "",
  graduationEnd1: "",

  instituteName2: "",
  instituteLocation2: "",
  degree2: "",
  fieldofStudy2: "",
  graduationStart2: "",
  graduationEnd2: "",

  instituteName3: "",
  instituteLocation3: "",
  degree3: "",
  fieldofStudy3: "",
  graduationStart3: "",
  graduationEnd3: "",
};
const count=1;
const EducationStoreSlice = createSlice({
  name: "educationDetails",
  initialState,
  count,

  reducers: {
    storeInstituteName: (state, action) => {
        console.log(action.payload.count)
        if(action.payload.count===1){
            state.instituteName1 = action.payload.data;
        }
        if(action.payload.count===2){
            state.instituteName2 = action.payload.data;
        }
        if(action.payload.count===3){
            state.instituteName3 = action.payload.data;
        }

    },
    storeInstituteLocation: (state, action) => {
        if(action.payload.count===1){
            state.instituteLocation1 = action.payload.data;
        }
        if(action.payload.count===2){
            state.instituteLocation2 = action.payload.data;
        }
        if(action.payload.count===3){
            state.instituteLocation3 = action.payload.data;
        }
    },
    storeDegree: (state, action) => {
        if(action.payload.count===1){
            state.degree1 = action.payload.data;
        }
        if(action.payload.count===2){
            state.degree2 = action.payload.data;
        }
        if(action.payload.count===3){
            state.degree3 = action.payload.data;
        }
    },
    storeFieldofStudy: (state, action) => {
        if(action.payload.count===1){
            state.fieldofStudy1 = action.payload.data;
        }
        if(action.payload.count===2){
            state.fieldofStudy2 = action.payload.data;
        }
        if(action.payload.count===3){
            state.fieldofStudy3 = action.payload.data;
        }
    },
    storeGraduactionStart: (state, action) => {
        if(action.payload.count===1){
            state.graduationStart1 = action.payload.data;
        }
        if(action.payload.count===2){
            state.graduationStart2 = action.payload.data;
        }
        if(action.payload.count===3){
            state.graduationStart3 = action.payload.data;
        }
    },
    storeGraduationEnd: (state, action) => {
        if(action.payload.count===1){
            state.graduationEnd1 = action.payload.data;
        }
        if(action.payload.count===2){
            state.graduationEnd2 = action.payload.data;
        }
        if(action.payload.count===3){
            state.graduationEnd3 = action.payload.data;
        }
    },
  },
});

export const {
  storeInstituteName,
  storeInstituteLocation,
  storeDegree,
  storeFieldofStudy,
  storeGraduactionStart,
  storeGraduationEnd,
} = EducationStoreSlice.actions;
export default EducationStoreSlice.reducer;
