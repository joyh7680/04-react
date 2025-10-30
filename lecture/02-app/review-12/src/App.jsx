import './App.css'
import { Routes, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Menus from './pages/Menus'
import MenuDetail from './pages/MenuDetail'
import MenuSearchResult from './pages/MenuSearchResult'
// import { router } from './routes/router'

/*
홈
소개페이지
메뉴 목록
메뉴상세페이지
메뉴검색결과 페이지
*/

function App() {

  return (
    <>
      <Routes>
        <Route  path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About /> } />
           {/* <Route path='/menus' element={<Menus />} /> */}
          <Route path='menus'>
            <Route index  element={<Menus />} />
            <Route path=':id'element={<MenuDetail />} />
            {/* http://localhost:5173/menus/search?condition=menuName&keyword=%E3%85%87%E3%85%87 */}
            <Route path='search' element={<MenuSearchResult />} ></Route>
          </Route>
        </Route>
      </Routes>
      {/* <RouterProvider router={router} /> */}
    </>
  )
}

export default App
