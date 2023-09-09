import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instituteName : [ '', '', '', ],
  instituteLocation: [ '','','' ],
  degree: [ '','',''],
  fieldofStudy: [ '','',''],
  graduationStart: ['','',''],
  graduationEnd: [ '','',''],
};
const count=1;
const EducationStoreSlice = createSlice({
  name: "educationDetails",
  initialState,
  count,

  reducers: {
    storeInstituteName: (state, action) => {
        state.instituteName[action.payload.count] = action.payload.data
    },
    storeInstituteLocation: (state, action) => {
        state.instituteLocation[action.payload.count] = action.payload.data;
    },
    storeDegree: (state, action) => {
        state.degree[action.payload.count] = action.payload.data;
    },
    storeFieldofStudy: (state, action) => {
        state.fieldofStudy[action.payload.count] = action.payload.data;
    },
    storeGraduactionStart: (state, action) => {
        state.graduationStart[action.payload.count] = action.payload.data;
    },
    storeGraduationEnd: (state, action) => {
        state.graduationEnd[action.payload.count] = action.payload.data;
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
