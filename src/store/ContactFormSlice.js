import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    surname:'',
    city:'',
    country:'',
    phone:'',
    email:'',
    state:'',
    pincode:'',
    title:'',
  }
  
const ContactFormSlice = createSlice({
  name: "ContactDetails",
  initialState,

  reducers:{
    storeName:(state, action) => {
        state.name=action.payload
    },
    storeSurname:(state, action) => {
        state.surname=action.payload
    },
    storeCity:(state, action) => {
        state.city=action.payload
    },
    storeCountry:(state, action) => {
        state.country=action.payload
    },
    storePhone:(state, action) => {
        state.phone=action.payload
    },
    storeEmail:(state, action) => {
        state.email=action.payload
    },
    storeState:(state, action) => {
        state.state=action.payload
    },
    storePinCode:(state, action) => {
        state.pincode=action.payload
    },
    storeTitle:(state, action) => {
        state.title=action.payload
    },
  }
});

export const {storeName, storeSurname, storeCity, storeCountry, storePhone, storeEmail, storeState, storePinCode, storeTitle} = ContactFormSlice.actions
export default ContactFormSlice.reducer;

