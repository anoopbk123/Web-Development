import React, { useEffect, useLayoutEffect, useReducer, useRef } from "react";
import counterReducer,{type} from "../../reducer/counterReducer";

export default function CounterUsingReducer() {
    const colorRef = useRef()
    const [counterState, counterStateDispatch] = useReducer(counterReducer,{
      count:0,
      color:'black',
    })

    useLayoutEffect(()=>{
        if(colorRef.current){
            colorRef.current.style.color = counterState.color
        }
    },[counterState])

  return (
    <div className="m-1 p-1">
      <h3 ref={colorRef}>counter {counterState.count}</h3>
      <div className="d-flex gap-1 m-1 p-1">
        <div><button onClick={()=>{counterStateDispatch({type:type.changeValue, payload:1})}} className="btn-primary">increment</button></div>
        <div><button onClick={()=>{counterStateDispatch({type:type.changeValue, payload: -1})}} className="btn-primary">decrement</button></div>
      </div>
      <div className="d-flex gap-1 m-1 p-1">
        <div><button onClick={()=>{
            counterStateDispatch({type:type.changeColor, payload:'green'})
        }} className="btn-primary">Green</button></div>
        <div><button onClick={()=>{
            counterStateDispatch({type:type.changeColor, payload:'red'})       }} className="btn-primary">Red</button></div>
      </div>
    </div>
  );
}
