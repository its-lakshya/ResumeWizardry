import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  website: false,
  certifications: false,
  languages: false,
  accomlishments: false,
  additionalInformation: false,
};

const AddSectionSlice = createSlice({
  name: "sectionSelectionDetails",
  initialState,

  reducers: {
    storeSectionSelection: (state, action) => {
      if (action.payload === "Websites, Portfolios, Profiles") {
        if (state.website === true) {
          state.website = false;
        } else {
          state.website = true;
        }
      }
      if (action.payload === "Certifications") {
        if (state.certifications === true) {
          state.certifications = false;
        } else {
          state.certifications = true;
        }
      }
      if (action.payload === "Languages") {
        if (state.languages === true) {
          state.languages = false;
        } else {
          state.languages = true;
        }
      }
      if (action.payload === "Accomplishments") {
        if (state.accomlishments === true) {
          state.accomlishments = false;
        } else {
          state.accomlishments = true;
        }
      }
      if (action.payload === "Additional Information") {
        if (state.additionalInformation === true) {
          state.additionalInformation = false;
        } else {
          state.additionalInformation = true;
        }
      }
    },
  },
});

export const { storeSectionSelection } =  AddSectionSlice.actions;
export default AddSectionSlice.reducer;
