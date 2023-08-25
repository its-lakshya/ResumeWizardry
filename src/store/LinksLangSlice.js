import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    link1:'',
    link2:'',
    link3:'',
    link4:'',
    link5:'',
    lang1:'',
    lang2:'',
    lang3:'',
    lang4:'',
    lang5:'',
}

const LinksLangSlice = createSlice({
    name:'linksLangDetails',
    initialState,

    reducers:{
        storeLinks:(state, action)=> {
            if(action.payload.type===1){
                state.link1= action.payload.data
            }
            if(action.payload.type===2){
                state.link2= action.payload.data
            }
            if(action.payload.type===3){
                state.link3= action.payload.data
            }
            if(action.payload.type===4){
                state.link4= action.payload.data
            }
            if(action.payload.type===5){
                state.link5= action.payload.data
            }
        },
        storeLangs:(state, action) => {
            if(action.payload.type===1){
                state.lang1= action.payload.data
            }
            if(action.payload.type===2){
                state.lang2= action.payload.data
            }
            if(action.payload.type===3){
                state.lang3= action.payload.data
            }
            if(action.payload.type===4){
                state.lang4= action.payload.data
            }
            if(action.payload.type===5){
                state.lang5= action.payload.data
            }
        }
    }
})


export const {storeLinks, storeLangs} = LinksLangSlice.actions;
export default LinksLangSlice.reducer 