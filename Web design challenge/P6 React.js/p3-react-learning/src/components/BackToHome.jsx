import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BackToHome() {
    const navigator = useNavigate()
  return (
    <div>
      <div onClick={()=>{
      navigator('/')
     }} style={{
      background:'light blue',
      color:'red',
      position:'fixed',
      top:'0',
      right:'0',
      cursor:'pointer'
     }}>
      Go back to home
     </div>
    </div>
  )
}
