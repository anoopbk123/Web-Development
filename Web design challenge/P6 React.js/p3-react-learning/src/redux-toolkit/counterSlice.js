import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        changeCounter:(previousState, action)=>{
            return previousState + action.payload
        }
    }
})

export const {changeCounter} = counterSlice.actions
export default counterSlice.reducer