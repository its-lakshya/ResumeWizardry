import { createSlice } from "@reduxjs/toolkit"

const initialState= {
    link : [],
    lang : [],
}

const LinksLangSlice = createSlice({
    name:'linksLangDetails',
    initialState,

    reducers:{
        storeLinks:(state, action)=> {
            if(action.payload.type===1){
                state.link[0]= action.payload.data
            }
            if(action.payload.type===2){
                state.link[1]= action.payload.data
            }
            if(action.payload.type===3){
                state.link[2]= action.payload.data
            }
            if(action.payload.type===4){
                state.link[3]= action.payload.data
            }
            if(action.payload.type===5){
                state.link[4]= action.payload.data
            }
        },
        storeLangs:(state, action) => {
            if(action.payload.type===1){
                state.lang[0]= action.payload.data
            }
            if(action.payload.type===2){
                state.lang[1]= action.payload.data
            }
            if(action.payload.type===3){
                state.lang[2]= action.payload.data
            }
            if(action.payload.type===4){
                state.lang[3]= action.payload.data
            }
            if(action.payload.type===5){
                state.lang[4]= action.payload.data
            }
        }
    }
})


export const {storeLinks, storeLangs} = LinksLangSlice.actions;
export default LinksLangSlice.reducer 