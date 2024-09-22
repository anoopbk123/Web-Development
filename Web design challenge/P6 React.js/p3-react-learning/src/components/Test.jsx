import React, { useEffect, useState } from 'react'

export default function Test() {
    const [showTitle, setShowTitle] = useState(false)
    useEffect(()=>{
        setTimeout(()=>{setShowTitle(true)},2000)
    },[])
  return (
    <>
    {showTitle&&<div className='m-1' style={{color:'green'}}>
    Test
  </div>}
  {showTitle?<div className='m-1' style={{color:'green'}}>
    Test
  </div>:<></>}
    </>
  )
}
