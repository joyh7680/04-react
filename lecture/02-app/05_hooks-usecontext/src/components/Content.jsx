import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Content() {

   const {isDark} = useContext(ThemeContext)

  return (
    <div className={`content ${isDark ? 'dark-mode' : ''}`}>
      <p>content</p>
      
    </div>
  )
}

export default Content
