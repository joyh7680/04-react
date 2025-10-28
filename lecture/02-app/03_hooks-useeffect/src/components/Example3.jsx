import React, { useState, useEffect  } from 'react'

//의존성 배열에 특정값을 지정해놓는경우 
function Example3() {

  //1️) 상태 정의 (useState) : 여러개의 입력값 하나의 객체로
  const [date, setDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1, //js에서는 월이 0부터 시작함 그래서 +1  
    day: new Date().getDate()
  })

  //2️) useEffect 사용
  useEffect(() => {
    console.log ('Example3의 useEffect의 setUp함수 동작')
  }, [date.month, date.day])
  //setUp 함수 동작 시점
  //1. 최초 렌더링시 Mount
  //2. 의존성 배열에 지정된 값 변화시

  //3) 입력값 변경 핸들러 - handleDateChange 이벤트 함수 
  //기존의 데이터는 유지시켜야함
  /*
  date = 현재 상태 객체 { year, month, day }
...date = 전개 연산자(spread operator)
기존 객체의 모든 key-value를 새로운 객체 안에 복사
즉, { year: 2025, month: 10, day: 27 } 전체를 복사하는 것과 같음
목적: 기존 상태를 유지하면서 일부 값만 바꾸기 위해 사용
*/

  const handleDateChange = (e) => {
    setDate({
      ...date, //전개 연산자
      [e.target.id] : e.target.value //현재 change된 입력값만 변경
    })
  }

  //1 화면표시 input
  //3 value 
  //4 onChange

  return (
    <div>
      <input 
        type="text" 
        placeholder='년도'
        id='year' 
        value={date.year}
        onChange={handleDateChange}
       />
       <input 
        type="text" 
        placeholder='월'
        id='month' 
        value={date.month}
        onChange={handleDateChange}
       />
       <input 
        type="text" 
        placeholder='일'
        id='day' 
        value={date.day}
        onChange={handleDateChange}
       />
       { /* 6 초기화 데이터 화면표시  */}
       <h2>입력날짜 : {date.year}년 {date.month}월 {date.day}일</h2>
    </div>
  )
}

export default Example3
