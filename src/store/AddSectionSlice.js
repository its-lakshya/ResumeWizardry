import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  website: false,
  websiteTick:'invisible',

  certifications: false,
  certificationsTick:'invisible',

  languages: false,
  languagesTick:'invisible',

  accomplishments: false,
  accomplishmentsTick:'invisible',
  
  additionalInformation: false,
  additionalInformationTick:'invisible',
};



const AddSectionSlice = createSlice({
  name: "sectionSelectionDetails",
  initialState,

  reducers: {
    storeSectionSelection: (state, action) => {
      if (action.payload === "website") {  
        if (state.website === true) {
          state.website = false;
          state.websiteTick='invisible'
        } else {
          state.website = true;
          state.websiteTick='visible'
        }
      }
      if (action.payload === "certifications") {
        if (state.certifications === true) {
          state.certifications = false;
          state.certificationsTick='invisible'
        } else {
          state.certifications = true;
          state.certificationsTick='visible'
        }
      }
      if (action.payload === "languages") {
        if (state.languages === true) {
          state.languages = false;
          state.languagesTick='invisible'
        } else {
          state.languages = true;
          state.languagesTick='visible'
        }
      }
      if (action.payload === "accomplishments") {
        if (state.accomplishments === true) {
          state.accomplishments = false;
          state.accomplishmentsTick='invisible'
        } else {
          state.accomplishments = true;
          state.accomplishmentsTick='visible'
        }
      }
      if (action.payload === "additionalInfomation") {
        if (state.additionalInformation === true) {
          state.additionalInformation = false;
          state.additionalInformationTick='invisible'
        } else {
          state.additionalInformation = true;
          state.additionalInformationTick='visible'
        }
      }
    },
  },
});

export const { storeSectionSelection } =  AddSectionSlice.actions;
export default AddSectionSlice.reducer;
