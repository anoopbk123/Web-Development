import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Address() {
  const outletContext = useOutletContext()
  
  
  return (
    <div className='over-flow-wrap p-1'>
      {outletContext&&<>
      {JSON.stringify(outletContext.address).slice(1,-2)}
      </>}
    </div>
  )
}
