import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='header' >
      <nav className='header-nav'>
        <ul className='header-list'>
          <li className='list-item'><Link to ='/Main'>Main</Link></li>
          <li className='list-item'><Link to ='/Gallery'>GALLERY</Link></li>
          <li className='list-item'><Link to ='/Projects'>PROJECTS</Link></li>
          <li className='list-item'><Link to ='/Contacts'>CONTACTS</Link></li>
        </ul>
      </nav>
    </header>
  )
}
