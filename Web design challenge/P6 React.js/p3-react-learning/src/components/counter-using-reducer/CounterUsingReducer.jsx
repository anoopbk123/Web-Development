import React, { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import counterReducer,{type} from "../../reducer/counterReducer";
import { json } from "react-router-dom";

export default function CounterUsingReducer() {
    const [data, setData] = useState(false)
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

    // const fetchAPI = ()=>{
    //   fetch('http://localhost:4000/name/2')
    //   .then((res)=>{
    //     console.log(res)
    //     if(!res.ok){
    //       throw new Error('error while fetching data')
    //     }
    //     return res.json()
    //   })
    //   .then((data)=>{
    //     setData(data)
    //   })
    //   .catch((err)=>{
    //     setData(err.message)
    //   })
    // }

    // useEffect(()=>{
    //   fetchAPI()
    // },[])


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
      <div>API Test</div>
      {data&&
      <>
      {JSON.stringify(data)}
      </>}
    </div>
  );
}
