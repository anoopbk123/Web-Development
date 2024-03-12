import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className='header d-flex gap-1 p-1'>
        <h1 className='logo-title'>
          <NavLink to='/'>
          learn react
          </NavLink>
        </h1>
        <nav className='nav'>
          <ul className='d-flex gap-1 flex-wrap justify-evenly'>
            <li>
              <NavLink to='/sign-up'>Sign Up</NavLink>
            </li>
            <li>
              <NavLink to='/example-context'>Example Context</NavLink>
            </li>
            <li>
              <NavLink to='/counter'>use effect example counter</NavLink>
            </li>
            <li>
              <NavLink to='/todo'>ToDo</NavLink>
            </li>
            <li>
              <NavLink to='/counter-reducer'>Counter with reducer</NavLink>
            </li>
            <li>
              <NavLink to='/api-fetch'>Api fetch</NavLink>
            </li>
            <li>
              <NavLink to='/users'>Users</NavLink>
            </li>
            <li>
              <NavLink to='/redux-counter'>Counter using redux</NavLink>
            </li>
            <li>
              <NavLink to='/redux-todo'>To Do App using Redux</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
