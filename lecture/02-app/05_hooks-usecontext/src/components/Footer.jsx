import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Footer() {

  const {isDark, setIsDark} = useContext(ThemeContext)

  return (
    <footer className = {`footer ${isDark ? 'dark-mode' : ''}`}>
      {/* 토글 버튼  */}
      <button
        onClick={() => setIsDark(!isDark)}// 논리연산자 
      >
        {/* 삼항연산자  */}
        {isDark ? 'Light Model' : 'Dark Mode'} 
      </button>
      <br/>
      Copyright 2025. All rights reserved

    </footer>
  )
}

export default Footer
