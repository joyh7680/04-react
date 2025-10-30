import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='app' >
      <Header />
      <NavBar />
      <main className='content'>
        {/* Outlet : 현재 선택된 자식 라우트(Home, About 등)가 렌더링될 위치*/}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
