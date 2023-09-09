import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // previousRoute:'',
    // currentRoute:'',
    nextRoute:'',
}

const RoutesSlice = createSlice({
    name:'routesDetails',
    initialState, 

    reducers:{
        // setProviousRoute:(state, action)=> {

        // },
        // setCurrentRoute:(state, action)=> {

        // },
        setNextRoute:(state, action)=> {
            if(action.payload!==undefined){
                state.nextRoute = action.payload
            }
            else{
                state.nextRoute = '/build-resume/download';
            }
        }
    }
})



export const {setProviousRoute, setCurrentRoute, setNextRoute} = RoutesSlice.actions
export default RoutesSlice.reducer