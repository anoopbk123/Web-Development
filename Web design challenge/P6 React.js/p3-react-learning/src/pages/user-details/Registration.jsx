import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function Registration() {
  const outletContext = useOutletContext()
  return (
    <div className='over-flow-wrap p-1'>
      {outletContext&&<>
        registration_date: {outletContext.registration_date}
      </>}
    </div>
  )
}
