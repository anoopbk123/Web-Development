import React, { useContext } from 'react'
import { exampleContext } from './ExampleContext'

export default function Child3() {
    const useExampleContext = useContext(exampleContext)
  return (
    <div>
      Child3.jsx
      context value - {useExampleContext}
      
    </div>
  )
}
