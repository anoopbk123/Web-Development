import { combineReducers, createStore } from "redux";

//action creators
export const counterAction = (process) => {
    return {type:'count', payload: process === 'increment'? +1 : -1}
}
export const colorAction =(color) => {
    return {type:'color', payload: color}
}

//reducers
const countReducer = (prevState = 0, action)=>{
    switch(action.type){
        case 'count':
            return prevState + action.payload
        default:
            return prevState;
    }
}

const colorReducer = (prevState = 'black', action) => {
    switch(action.type){
        case 'color':
            return action.payload;
        default:
            return prevState;
    }
}

//reducer
const appReducer = combineReducers({
    count:countReducer,
    color:colorReducer,
})

//store
const store = createStore(appReducer);

export default store;





// const reducer = (prevState = { value: 0 }, action) => {
//     if (action.type === "increment") {
//       return {
//         ...prevState,
//         value: prevState.value + action.payload,
//       };
//     } else if (action.type === "decrement") {
//       return {
//         ...prevState,
//         value: prevState.value + action.payload,
//       };
//     } else {
//       return prevState;
//     }
//   };

//store
// const store = createStore(reducer);

// export default store;