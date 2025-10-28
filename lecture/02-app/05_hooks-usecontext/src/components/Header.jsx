import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Header() {

  const {isDark} = useContext(ThemeContext)

  return (
    <>
      {/* 백틱 사용  */}
      <header className={`header ${isDark ? 'dark-mode' : ''}`}>
        <h1>header</h1>
      </header>
    </>
  )
}

export default Header
