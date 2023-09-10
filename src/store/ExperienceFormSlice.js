import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: ['','',''],
    organization: ['','',''],
    city: ['','',''],
    country: ['','',''],
    start: ['','',''],
    end: ['','',''],
    description:[['','','','',''],['','','','',''],['','','','','']],

    
    // title2:'',
    // organization2:'',
    // city2:'',
    // country2:'',
    // start2:'',
    // end2:'',
    // description2:{
    //     a:'',
    //     b:'',
    //     c:'',
    //     d:'',
    //     e:'',
    // },
    // title3:'',
    // organization3:'',
    // city3:'',
    // country3:'',
    // start3:'',
    // end3:'',
    // description3:{
    //     a:'',
    //     b:'',
    //     c:'',
    //     d:'',
    //     e:'',
    // }
}
const ExperienceFormSlice = createSlice({
    name:'experienceDetails',
    initialState, 

    reducers:{
        storeTitle:(state, action)=> {
            state.title[action.payload.count] = action.payload.data;

            // if(action.payload.count===1){
            //     state.title1 = action.payload.data;
            // }
            // if(action.payload.count===2){
            //     state.title2 = action.payload.data;
            // }
            // if(action.payload.count===3){
            //     state.title3 = action.payload.data;
            // }
        },
        storeOrganization:(state, action)=> {
            state.organization[action.payload.count] = action.payload.data;
            // if(action.payload.count===1){
            //     state.organization1 = action.payload.data;
            // }
            // if(action.payload.count===2){
            //     state.organization2 = action.payload.data;
            // }
            // if(action.payload.count===3){
            //     state.organization3 = action.payload.data;
            // }
        },
        storeCity:(state, action)=> {
            state.city[action.payload.count] = action.payload.data;
            // if(action.payload.count===1){
            //     state.city1 = action.payload.data;
            // }
            // if(action.payload.count===2){
            //     state.city2 = action.payload.data;
            // }
            // if(action.payload.count===3){
            //     state.city3 = action.payload.data;
            // }
        },
        storeCountry:(state, action)=> {
            state.country[action.payload.count] = action.payload.data;
            // if(action.payload.count===1){
            //     state.country1 = action.payload.data;
            // }
            // if(action.payload.count===2){
            //     state.country2 = action.payload.data;
            // }
            // if(action.payload.count===3){
            //     state.country3 = action.payload.data;
            // }
        },
        storeStart:(state, action)=> {
            state.start[action.payload.count] = action.payload.data;
            // if(action.payload.count===1){
            //     state.start1 = action.payload.data;
            // }
            // if(action.payload.count===2){
            //     state.start2 = action.payload.data;
            // }
            // if(action.payload.count===3){
            //     state.start3 = action.payload.data;
            // }
        },
        storeEnd:(state, action)=> {
            state.end[action.payload.count] = action.payload.data;
            // if(action.payload.count===1){
            //     state.end1 = action.payload.data;
            // }
            // if(action.payload.count===2){
            //     state.end2 = action.payload.data;
            // }
            // if(action.payload.count===3){
            //     state.end3 = action.payload.data;
            // }
        },
        storeDescription:(state, action)=> {
            state.description[action.payload.count][action.payload.number] = action.payload.data
            // if(action.payload.number==='a'){
            //     if(action.payload.count===1){
            //     state.description1.a = action.payload.data;
            //     }
            //     if(action.payload.number==='b'){
            //         state.description1.b = action.payload.data;
            //     }
            //     if(action.payload.number==='c'){
            //         state.description1.c = action.payload.data;
            //     }
            //     if(action.payload.number==='d'){
            //         state.description1.d = action.payload.data;
            //     }
            //     if(action.payload.number==='e'){
            //         state.description1.e = action.payload.data;
            //     }
            // }
            // if(action.payload.count===2){
            //     if(action.payload.number==='a'){
            //         state.description2.a = action.payload.data;
            //     }
            //     if(action.payload.number==='b'){
            //         state.description2.b = action.payload.data;
            //     }
            //     if(action.payload.number==='c'){
            //         state.description2.c = action.payload.data;
            //     }
            //     if(action.payload.number==='d'){
            //         state.description2.d = action.payload.data;
            //     }
            //     if(action.payload.number==='e'){
            //         state.description2.e = action.payload.data;
            //     }
            // }
            // if(action.payload.count===3){
            //     if(action.payload.number==='a'){
            //         state.description3.a = action.payload.data;
            //     }
            //     if(action.payload.number==='b'){
            //         state.description3.b = action.payload.data;
            //     }
            //     if(action.payload.number==='c'){
            //         state.description3.c = action.payload.data;
            //     }
            //     if(action.payload.number==='d'){
            //         state.description3.d = action.payload.data;
            //     }
            //     if(action.payload.number==='e'){
            //         state.description3.e = action.payload.data;
            //     }
            // }
        },
    }
})


export const {storeTitle, storeOrganization, storeCity, storeCountry, storeStart, storeEnd, storeDescription} = ExperienceFormSlice.actions
export default ExperienceFormSlice.reducer