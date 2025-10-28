import React, { useState } from 'react'


// reducer 개념 사용 전 - useState를 활용한 상태관리
function BeforeReducer() {

  //2    count상태 변수 , setCount상태를 변경하는 함수
  const [count, setCount] = useState(0);//초기값은 0.

  //3) +1 증가 함수
  const handleCountIncrease = () => {
    setCount(count + 1); //버튼 클릭 시 실행되어, count 값을 1 증가시킴.
  }

  //4)  -1 감소 함수
  const handleCountDecrease = () => {
    setCount(count - 1); //버튼 클릭 시 실행되어, count 값을 1 감소시킴.
  }

  //5 초기화
  const handleCountReset = () => {
    setCount(0); //버튼 클릭 시 count를 0으로 되돌림.
  }

  //6 인자(num) 로 받은 숫자만큼 count를 증가시킴.
  const handleCountIncreaseByNum = (num) => {
    setCount(count + num);
  } //음수값을 전달하면 감소 효과도 가능 (count - 5 같은 것).

  //1 화면표시
  //5 버튼 이벤트 코드 작성
  return (
    <>
      <h2>카운터 : {count}</h2>
      <button onClick = {handleCountIncrease}>+ 1 증가</button>
      <button onClick = {handleCountDecrease}>- 1 감소</button>

      <button onClick = {handleCountReset}>초기화</button>
      <button onClick = {handleCountIncrease}>+ 5 증가</button>
    </>
  )
}

export default BeforeReducer
