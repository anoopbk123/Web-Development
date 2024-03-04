import React from 'react'
import Child1 from './Child1'
import Default from './Default'
import { useNavigate } from 'react-router-dom'
import BackToHome from '../BackToHome'

export const exampleContext = React.createContext('nothing')
export const value = 'sad'

export default function ExampleContext() {
  
  return (
    <>
     <h2>Example context</h2>
     <exampleContext.Provider value='example-context' >
     <Child1/>
     </exampleContext.Provider>
     <Default/>
     <BackToHome/>
    </>
  )
}
