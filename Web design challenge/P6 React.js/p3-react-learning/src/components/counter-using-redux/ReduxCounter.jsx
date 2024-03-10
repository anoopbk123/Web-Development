import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { colorAction, counterAction } from '../../redux/store'

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
              dispatch(colorAction('green'))
            }}  className="btn-primary">Green</button>
        </div>
        <div>
            <button onClick={()=>{
              dispatch(counterAction('increment'))
            }}  className="btn-primary">+</button>
        </div>
        <div style={{color:color}}>
            count {count}
        </div>
        <div>
            <button onClick={()=>{dispatch(counterAction('decrement'))
            }} className="btn-primary">-</button>
        </div>
        <div>
            <button onClick={()=>{
              dispatch(colorAction('yellow'))
            }}  className="btn-primary">Yellow</button>
        </div>
      </div>
    </div>
  )
}
