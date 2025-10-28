import React, { useState, useEffect } from "react"
/*
목표 정의
입력한 연, 월, 일을 상태로 관리
화면에 입력값을 바로 보여주기
특정 값(month, day) 변경 시 useEffect 동작
*/

function ReviewEx3() {
  
  //2 상태정의 - date로 한꺼번에 묶어서 정의
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate()
  })

  // 3 useEffect 작성
  useEffect(()=>{
    console.log('ReviewEx3의 useEffect의 setUp함수 동작')
  }, [date.month, date.day])
 /* 의존성 배열 [date.month, date.day] → month나 day가 바뀌면 실행
  Mount 시점(처음 렌더링)에도 실행
  year가 바뀌어도 실행되지 않음 */

  //4️) 입력값 변경 이벤트 작성
  const handleDateChange = (e) => {
    setDate({
      ...date,
      [e.target.id]: e.target.value
    })
  }
  /* 이벤트 객체 e에서 어떤 input이 변경됐는지(id)와 값(value) 가져옴
  ...date → 기존 상태 유지
  [e.target.id]: e.target.value → 변경된 값만 덮어쓰기 */

  return (
    <>
       {/* 1 화면표시  */}
      <input type="text" placeholder='년도' id='year' value={date.year} onChange={handleDateChange}/>
      <input type="text" placeholder='월' id='month' value={date.month} onChange={handleDateChange}/>
      <input type="text" placeholder='일' id='day' value={date.day} onChange={handleDateChange}/>
      <h2>입력날짜 :   {date.year} 년   {date.month}  월   {date.day} 일</h2>
    </>
  )
}

export default ReviewEx3

/*
1. 기본셋팅
상태 필요? → useState
렌더링 후 처리? → useEffect
사용자 입력/클릭 처리? → 이벤트 핸들러
화면 표시 → JSX 작성
*/

/*
✅ 전체 작성 순서 요약
목표 정의 → 입력값, 상태, side effect
상태 정의 → useState로 객체 상태 만들기
useEffect 작성 → 특정 값 변화 시 동작할 코드 작성
이벤트 핸들러 작성 → 입력값 변화 처리
JSX 작성 → 화면 구성, 상태 연결, 이벤트 연결
*/