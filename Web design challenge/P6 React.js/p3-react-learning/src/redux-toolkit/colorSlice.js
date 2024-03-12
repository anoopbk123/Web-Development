import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name:'color',
    initialState:'black',
    reducers:{
        changeColor:(previousState, actions)=>{
            return actions.payload
        }
    }
})
export const {changeColor} = colorSlice.actions
export default colorSlice.reducer