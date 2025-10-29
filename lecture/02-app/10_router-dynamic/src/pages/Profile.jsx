import React from 'react'
import {useParams} from 'react-router-dom'

// 특정사용자의 프로필 페이지 : /profile/사용자 식별자
function Profile() { //특정 사용자의 프로필 페이지를 렌더링하는 목적

  //7 useParams
  // useParams() // {uid : "1"} || {uid : "2"}
  const {uid} = useParams() //URL에서 동적 파라미터(:uid)를 추출
  
  // 8 화면표시
  return (
    <div> 
      <h5>프로필 페이지</h5>
      <p>현재 페이지는 {uid } 회원번호의 사용자 프로필 페이지 </p>
    </div>
  )
}

export default Profile