import React from 'react'
import {Outlet, Link} from 'react-router-dom'

function Dashboard() {

  // 8) Outlet 통해서 데이터 전달하기
  const dashboardData = {
    numOfUsers: 100,
    numOfOders: 1000
  }

  return (
    <div>
      <h2>대시보드</h2>
      {/* 7) 대시보드 nav 상대경로로 링크만들기 */}
      <nav>
        <Link to=''>대시보드홈</Link> | 
        {/* <Link to='/dashboard/settings'>설정</Link> */}
        <Link to='settings'>설정</Link> | 
        <Link to='analytics'>분석</Link>
      </nav>
      <div>
        <h4>대시보드 컨텐츠</h4>
        {/* 5 Outlet 중첩된 라우트(Route)에서 자식 컴포넌트를 보여주는 자리 표시자 -> import 확인 */}
        {/* 8) Outlet 통해서 데이터 전달하기 */}
        <Outlet context={dashboardData} />
      </div>
    </div>
  )
}

export default Dashboard

/*
<Outlet />은 React Router v6 이상에서 사용하는 특별한 컴포넌트예요. 역할을 쉽게 말하면 중첩된 라우트(Route)에서 자식 컴포넌트를 보여주는 자리 표시자
*/