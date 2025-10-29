import {Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Analytics from './pages/Analytics'

function App() {

  return (
    <>
     {/* 3 nav 수정 */}
      <nav style={{background: "#000", height: "60px", color:"#fff", lineHeight:'60px', padding:'20px'}} >
        <Link to="/">홈</Link> | <Link to="/dashboard">대시보드</Link>
      </nav>
      {/* 2 화면표시  */}
      <main style={{padding: '20px'}  } >
        <h2>메인 컨텐츠</h2>
        {/* 4) Routes/Route 링크연결, import확인 */}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />}>
            {/* 6) 중첩라우팅 -> import확인 */}
            {/* dashboard 레이아웃은 두고 여러개의 다른 내용들이 바뀔때 사용 */}
            {/* route안에 route가 있다면 outlet이 있구나 라고 생각하면 좋음 */}
            <Route path='settings' element={<Settings /> } /> 
            <Route path='analytics' element={<Analytics /> } /> 
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App

/* /*
  1. 중첩 라우팅(Nested Routing)
    1) 부모 라우트 컴포넌트 안에서 자식 라우트 컴포넌트를 정의하는 방식입니다. 
    2) 중첩 경로 작성시 슬래시(/)로 시작하지 않도록 주의합니다. (중첩 경로는 부모 경로에 상대 경로로 자식 경로를 표현합니다.)

  2. <Outlet>
    1) 중첩된 라우팅 구조에서 자식 라우트 컴포넌트가 렌더링되는 위치를 지정하는 컴포넌트입니다.
    2) Outlet에 표현되는 자식 라우트 컴포넌트로 Context를 통해 데이터를 전달할 수 있습니다.
    3) 자식 라우트 컴포넌트에서는 useOutletContext() 훅을 사용하여 Context에 저장된 데이터를 읽을 수 있습니다.
*/

/*

5) Dashboard 컴포넌트내에 페이지들이 있었으면 좋겠어
/dashboard/settings => 설정페이지
/dashboard/analytics => 분석페이지

*/ 