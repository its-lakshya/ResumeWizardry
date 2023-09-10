import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nextRoute:'',
}

const RoutesSlice = createSlice({
    name:'routesDetails',
    initialState, 

    reducers:{
        setNextRoute:(state, action)=> {
                state.nextRoute = action.payload
        }
    }
})



export const {setNextRoute} = RoutesSlice.actions
export default RoutesSlice.reducer