import React from 'react'
import {useOutletContext} from 'react-router-dom'

function Settings() {

  // 9) react-router-dom 훅 
  const {numOfUsers, numOfOders} =  useOutletContext() //  { numOfUsers: 100, numOfOders: 1000}
  // 객체구조분해할당 진행 

  return (
    <div>
      {/* 10) useOutletContext 화면표시  */}
        <h5>대시보드 - 설정페이지</h5>
        <p>유저수 : {numOfUsers}</p>
        <p>주문수 : {numOfOders}</p>
    </div>
  )
}

export default Settings
