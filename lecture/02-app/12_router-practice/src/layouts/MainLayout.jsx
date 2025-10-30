import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

// MainLayout.jsx는 “공통 화면 틀을 만드는 곳”
// 라우트 안에서 보여질 공통 UI 구성

function MainLayout() {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <main className='content'>
        {/* 라우팅되는 페이지별 콘텐츠 표현 자리  */}
        {/*  Outlet 여기에 Home/About/Menus 등 라우트별 콘텐츠가 들어옴 */}
        <Outlet /> 
      </main>
      <Footer />      
    </div>
  )
}

export default MainLayout

/*
Outlet 개념 정리
<Outlet />은 **"자식 라우트가 렌더링될 자리"**야.
비유하자면,
MainLayout = 건물의 뼈대 (Header, Navbar, Footer)
Outlet = 건물의 “방 안 공간”
→ 방마다(Home, About, Menus 등) 다른 내용을 넣을 수 있음.
즉, 부모 라우트(MainLayout)가 있고 그 아래 자식 라우트들이 연결되면,
그 자식들이 <Outlet /> 자리에 자동으로 렌더링되는 거야.
*/