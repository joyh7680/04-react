import React from 'react'
import { useParams } from 'react-router-dom'

// 목적: 카테고리와 아이디에 따라 다른 연습문제 페이지를 렌더링
//조회 버튼 클릭시에 input값 입력된 페이지 나와야함

/*
예시 URL:
  /practice/it/2
  /practice/it/5
  /practice/history/1
  /practice/art/5
*/

function Practice() {

  // 1. useParams()로 URL 동적 파라미터 추출
  //useParams()는 객체를 반환 → 구조 분해 할당으로 필요한 값만 꺼내기
   // URL에서 category와 id 추출
  const {category, id} = useParams(); 
  // useParams()는 URL에 포함된 값(예: /practice/it/5) 을
// {category: "it", id: "5"} 형태로 꺼내주는 훅이에요.

  // 2. UI 설계 및 동적 데이터 렌더링
  return (
    <>
      <p>현재 카테고리: {category}</p>
      <p>현재 아이디: {id}</p>
    </>
  )
}

export default Practice
