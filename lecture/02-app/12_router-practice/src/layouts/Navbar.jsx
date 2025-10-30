import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {/* NavLink active넣을수 있음 */}
        <li><NavLink to="/">홈</NavLink></li>
        <li><NavLink to="/about">소개페이지</NavLink></li>
        <li><NavLink to="/menus">메뉴 목록</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar