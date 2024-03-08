import { useState } from 'react'
import './App.css'
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import SignUpPage from './pages/SignUpPage'
import ExampleContext from './components/example-context/ExampleContext'
import Counter from './components/use-effect-counter/Counter'
import ToDo from './pages/ToDo'
import CounterUsingReducer from './components/counter-using-reducer/CounterUsingReducer'
import APIFetch from './components/APIFetch'
import Users from './pages/users/Users'
import UserDetails from './pages/user-details/UserDetails'

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
        <Route path='/counter-reducer' element={<CounterUsingReducer/>}/>
        <Route path='/api-fetch' element={<APIFetch/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/user-details/:userId/:userEmail' element={<UserDetails/>}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
