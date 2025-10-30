import './App.css'
import MainLayout from './layouts/MainLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menus from './pages/Menus'
import MenuDetail from './pages/MenuDetail'
import MenuSearchResult from './pages/MenuSearchResult'

// App.jsx는 “라우팅 규칙을 정의하는 곳”
//경로별로 어떤 컴포넌트 보여줄지 지정

function App() {

  /*
    /              메인페이지             MainLayout + Outlet(Home)
    /about         소개페이지             MainLayout + Outlet(about)
    /menus         메뉴 목록페이지        MainLayout + Outlet(Menus)
    /menus/:id     메뉴상세페이지         MainLayout + Outlet(MenuDetail)
    /menus/search  메뉴검색결과 페이지    MainLayout + Outlet(MenuSearchResult)
  
  */
  
  return (
    <>
      {/* <MainLayout /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* index 부모 라우터 경로 (/) */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/* <Route path="menus" element={<Menus />} />
          <Route path="menus/:id" element={<MenuDetail />} />
          <Route path="menus/search" element={<MenuSearchResult />} /> */}
          <Route path="menus">
            <Route index element={<Menus />} /> {/* /menus    MainLayout + Menus */}
            <Route path=":id" element={<MenuDetail />} /> {/* /menus/:id MainLayout + MenuDetail */}
            <Route path="search" element={<MenuSearchResult />} /> {/* /menus/:search MainLayout + MenuSearchResult */}
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
