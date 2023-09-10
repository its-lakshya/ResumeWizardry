import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skill:[]
}

const SkillFormSlice = createSlice({
    name:'skillDetails',
    initialState, 

    reducers:{
        storeSkill:(state, action)=>{
            state.skill[action.payload.count]=action.payload.data
            // if(action.payload.count===1){
            //     state.skill1=action.payload.data
            // }
            // if(action.payload.count===2){
            //     state.skill2=action.payload.data
            // }
            // if(action.payload.count===3){
            //     state.skill3=action.payload.data
            // }
            // if(action.payload.count===4){
            //     state.skill4=action.payload.data
            // }
            // if(action.payload.count===5){
            //     state.skill5=action.payload.data
            // }
            // if(action.payload.count===6){
            //     state.skill6=action.payload.data
            // }
            // if(action.payload.count===7){
            //     state.skill7=action.payload.data
            // }
            // if(action.payload.count===8){
            //     state.skill8=action.payload.data
            // }
            // if(action.payload.count===9){
            //     state.skill9=action.payload.data
            // }
            // if(action.payload.count===10){
            //     state.skill10=action.payload.data
            // }
            
        }
    }
})



export const {storeSkill} = SkillFormSlice.actions
export default SkillFormSlice.reducer