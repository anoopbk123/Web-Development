import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function Phone() {
  const outletContext = useOutletContext()
  return (
    <div className='over-flow-wrap p-1'>
      {outletContext&&<>
        phone: {outletContext.phone}
      </>}
    </div>
  )
}
