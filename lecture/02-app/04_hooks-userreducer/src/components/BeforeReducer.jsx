import React, { useState } from 'react'


// reducer 개념 사용 전 - useState를 활용한 상태관리
function BeforeReducer() {

  //2
  const [count, setCount] = useState(0);

  //3 + 1 증가
  const handleCountIncrease = () => {
    setCount(count + 1);
  }

  //4  - 1 감소
  const handleCountDecrease = () => {
    setCount(count - 1);
  }

  //5 초기화
  const handleCountReset = () => {
    setCount(0);
  }

  //6 바뀐 숫자만큼
  const handleCountIncreaseByNum = (num) => {
    setCount(count + num);
  }

  //1 화면표시
  //5 버튼 이벤트 코드 작성
  return (
    <>
     <h2>카운터 : {count}</h2>
     <button onClick = {handleCountIncrease}>+ 1 증가</button>
     <button onClick = {handleCountDecrease}>- 1 감소</button>
     <button onClick = {handleCountReset}>초기화</button>
      <button onClick = {handleCountIncrease}>+ 5 증가</button>
      <button onClick =  { () =>  handleCountIncreaseByNum(5)}>- 5 감소</button>
    </>
  )
}

export default BeforeReducer
