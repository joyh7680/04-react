import React from 'react'
import {useOutletContext} from 'react-router-dom'
// 11) Analytics 같이 수정 

function Analytics() {

  const {numOfUsers, numOfOders} =  useOutletContext() 

  return (
    <div>
      <h5>대시보드 - Analytics</h5>
      <p>유저수 : {numOfUsers}</p>
      <p>주문수 : {numOfOders}</p>
    </div>
  )
}

export default Analytics
