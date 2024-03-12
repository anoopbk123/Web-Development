import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
    name:'todo-list',
    initialState:[],
    reducers:{
        addToDo:(tDoList, actions)=>{
            tDoList.push(actions.payload)
        },
        removeToDo:(tDoList, actions)=>{
            const removeIndex = tDoList.findIndex((todo)=>todo === actions.payload)
            tDoList.splice(removeIndex, 1);
        }
    }  
})

export const {addToDo, removeToDo} = toDoSlice.actions
export default toDoSlice.reducer