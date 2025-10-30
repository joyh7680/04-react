import React from 'react'
import { NavLink  } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li><NavLink to="/">Home </NavLink ></li>
        <li><NavLink to="/about">About </NavLink ></li>
        <li><NavLink to="/menus">Menus </NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
