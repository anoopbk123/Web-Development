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
          <ul className='d-flex gap-1'>
            <li>
              <Link to='/sign-up'>Sign Up</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
