import React, { useState } from 'react'

export default function Otp() {
    const [email, setEmail] = useState('')
    const [out, setOut] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:6000/${email}`)
        .then((res)=>res.json())
        .then((d)=>{console.log(d)})
    }
  return (
    <div className='m-1 p-1'>
      <form onSubmit={handleSubmit}>
      <input type="email" onChange={e=>setEmail(e.target.value)} value={email} />
      <button className='btn-primary m-1'>send </button>
      </form>
      {out&&<div>
      {out}
      </div>}
    </div>
  )
}
