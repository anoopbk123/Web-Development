import React, { useEffect, useState } from "react";
import BackToHome from "../BackToHome";

export default function () {
  const [count, setCount] = useState(0);
  const [boom, setBoom] = useState(false)
  useEffect(() => {
    console.log("side effect 1 run, runs every time when component render");
  });
  useEffect(() => {
    console.log("side effect 2 run, runs every time when component mount");
  }, []);
  useEffect(() => {
    const timeOut = setTimeout(()=>{
        setBoom(true)
    },5000)
    console.log(
      "side effect 3 run, runs every time when component mount, when dependencies updated"
    );
    return ()=>{
        clearInterval(timeOut)
        setBoom(false)
        console.log('side effect cleaning, runs before a side effect is called after first call and before component unmount')
    }
  }, [count]);

  return (
    <div>
      count - {count}
      <div>
        <button
          onClick={() => {
            setCount((preVious) => {
              return preVious + 1;
            });
          }}
        >
          +
        </button>{" "}
        <button
          onClick={() => {
            setCount((preVious) => {
              return preVious - 1;
            });
          }}
        >
          -
        </button>
      </div>
      {boom&&<div>
        boom
        </div>}
        <BackToHome/>
    </div>
  );
}
