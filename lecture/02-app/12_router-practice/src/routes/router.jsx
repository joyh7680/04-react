import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menus from "../pages/Menus";
import MenuDetail from "../pages/MenuDetail";
import MenuSearchResult from "../pages/MenuSearchResult";

//1 createBrowserRouter
//2 배열로 나열 []
//3 router 변수설정

export const router = createBrowserRouter([
  // 4. 각 라우트를 개체 형식으로 작성

  // <Route path="/" element={<MainLayout />}></Route>
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'menus',
         children: [
          {
            index: true, //부모 라우터 경로랑 동일
            element: <Menus />
          },
          {
            path: ':id',
            element: <MenuDetail />
          },
          {
            path: 'search',
            element: <MenuSearchResult />
          }
         ]
      },
    ]
  }
])