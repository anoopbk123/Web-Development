import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import ExampleContext from './components/example-context/ExampleContext'
import Counter from './components/use-effect-counter/Counter'
import ToDo from './pages/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/sign-up' element={<SignUpPage/>}/>
        <Route path='/example-context' element={<ExampleContext/>}/>
        <Route path='/counter' element={<Counter/>} />
        <Route path='/todo' element={<ToDo/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
