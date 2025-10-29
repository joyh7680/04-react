import {Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Practice from './pages/Practice'

// 1.main.jsx
// browser import

function App() {
 
  return (
    <>
      {/* 2. App.jsx에서 네비게이션 구성
      사용자가 페이지를 이동할 수 있도록 링크(nav) 를 구성합니다. */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/profile/1">1번 회원 프로필 페이지</Link> | 
        <Link to="/profile/2">2번 회원 프로필 페이지</Link>
      </nav>
    
      <main>
          {/* 3. nav랑 맞춰서 <Routes>와 <Route>로 페이지 연결
          각 링크의 경로에 맞는 컴포넌트를 렌더링하도록 라우팅 설정 
          사고 흐름: URL 구조를 먼저 설계하고, 동적 파라미터(:uid, :category/:id)를 적용*/}
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            {/* :uid → URL에서 변하는 값, 즉 /profile/1 → uid = 1 */}
            <Route path='/profile/:uid' element={<Profile />}/>
            {/* 이게 왜 main 에 바로 보이는거?  */}
            {/* :category와 :id → URL에서 변하는 두 개의 파라미터 */}
            <Route path='/practice/:category/:id' element={<Practice  />}/> 
          </Routes>
      </main>
     
    </>
  )
}

export default App



/*
4. Home About Profile Practice파일 생성
5. profile 파일 작업 
6. Home 파일 작업
기타) practice
*/