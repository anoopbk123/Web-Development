import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/sign-up' element={<SignUpPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
