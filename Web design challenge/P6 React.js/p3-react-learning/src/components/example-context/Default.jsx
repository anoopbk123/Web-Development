import React, { useContext } from 'react'
import { exampleContext, value } from './ExampleContext'

export default function Default() {
    const vl = value
    const defaultValueOfContext = useContext(exampleContext)
  return (
    <div>
      default value of context - {defaultValueOfContext} {vl}
    </div>
  )
}
