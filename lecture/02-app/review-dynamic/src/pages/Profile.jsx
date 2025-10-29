import React from 'react'
import { useParams } from 'react-router-dom'

// 1. 페이지 목적 정의
// 특정 사용자의 프로필 페이지를 보여주기 위한 컴포넌트

function Profile() {

  // 2. useParams로 URL 파라미터(uid) 추출
  const {uid} = useParams()  //useParams() 객체 안의 uid 값을 꺼내서 uid라는 변수에 넣는다.

  // 3. UI에 동적 데이터(uid) 렌더링
  return (
    <> 
      <h5>프로필 페이지</h5>
      <p>현재 페이지는 {uid} 회원 번호의 사용자 프로필 페이지</p>
    </>
  )
}

export default Profile

/*
useParams() 
useParams()는 **객체(object)**를 반환
{ uid: "1" }  또는 { uid: "2" }

{ uid } = ...는 객체 구조 분해 문법
 { uid } =  객체 안에서 uid라는 키에 해당하는 값을 uid 변수로 꺼내는 것
useParams().uid 값을 uid라는 변수로 바로 만든 것과 같음
*/