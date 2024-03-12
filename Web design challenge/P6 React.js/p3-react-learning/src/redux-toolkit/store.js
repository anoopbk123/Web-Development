import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'
import colorReducer from './colorSlice'
import toDoReducer from './toDoSlice'

const store = configureStore({
    reducer:{
        count:counterReducer,
        color: colorReducer,
        toDoList: toDoReducer,
    }
})

export default store