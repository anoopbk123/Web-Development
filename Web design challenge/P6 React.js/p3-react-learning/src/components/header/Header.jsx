import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <header className='header d-flex gap-1 p-1'>
        <h1 className='logo-title'>
          <Link to='/'>
          learn react
          </Link>
        </h1>
        <nav className='nav'>
          <ul className='d-flex gap-1 flex-wrap justify-evenly'>
            <li>
              <Link to='/sign-up'>Sign Up</Link>
            </li>
            <li>
              <Link to='/example-context'>Example Context</Link>
            </li>
            <li>
              <Link to='/counter'>use effect example counter</Link>
            </li>
            <li>
              <Link to='/todo'>ToDo</Link>
            </li>
            <li>
              <Link to='/counter-reducer'>Counter with reducer</Link>
            </li>
            <li>
              <Link to='/api-fetch'>Api fetch</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
