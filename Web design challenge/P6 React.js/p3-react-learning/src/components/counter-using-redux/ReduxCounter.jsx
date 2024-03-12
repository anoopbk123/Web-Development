import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeColor } from '../../redux-toolkit/colorSlice'
import { changeCounter } from '../../redux-toolkit/counterSlice'

export default function ReduxCounter() {
  const count = useSelector((store)=>store.count)
  const color = useSelector((store)=>store.color)
  const dispatch = useDispatch()
  return (
    <div>
      <h2 className='text-center m-1 p-1'>Redux Counter</h2>
      <div className="text-center d-flex justify-center gap-1">
      <div>
            <button onClick={()=>{
              dispatch(changeColor('green'))
            }}  className="btn-primary">Green</button>
        </div>
        <div>
            <button onClick={()=>{
              dispatch(changeCounter(1))
            }}  className="btn-primary">+</button>
        </div>
        <div style={{color:color}}>
            count {count}
        </div>
        <div>
            <button onClick={()=>{dispatch(changeCounter(-1))
            }} className="btn-primary">-</button>
        </div>
        <div>
            <button onClick={()=>{
              dispatch(changeColor('yellow'))
            }}  className="btn-primary">Yellow</button>
        </div>
      </div>
    </div>
  )
}
