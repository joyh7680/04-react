import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function Example1() {

  console.log('컴포넌트 렌더링됨')

  const [count, setCount] = useState(0); // [0, function]
  const countRef = useRef(0) // {} {current: 0}  객체의 형태로 반환

  const handleCountChange = () => {
    setCount(count + 1); //state 값 변경시에는 컴포넌트 리렌더링 발생
  }

  const handleRefChange = () => {
    countRef.current += 1; // ref값 변경시에는 컴포넌트 리렌더링 발생 x 
  }

  return (
    <>
      <button onClick={handleCountChange}>state(count)값 변경</button>
      <button onClick={handleRefChange}>ref(countRef)값 변경</button>
      <h1>
        state(count)값 변경 : {count}, ref(countRef) : {countRef.current}
      </h1>
    </>
  )
}

export default Example1