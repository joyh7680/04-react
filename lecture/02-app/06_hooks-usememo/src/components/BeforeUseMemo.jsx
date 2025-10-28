import React from 'react'
import { useState } from 'react';

function BeforeUseMemo() {

  //렌더링되는 시점: 최초의한번, state또는 props 변경시, 부모컴포넌트 렌더링
  console.log('컴포넌트가 렌더링됨...'); 

  const [num1, setnum1] = useState(0);
  const operation1 = () => {
    console.log('operation1 함수 실행');
    for (let i = 0; i < 1000000000; i++) {}
    return num1 + 1
  }
  const result1 = operation1()

  const [num2, setnum2] = useState(0);

   const operation2 = () => {
    console.log('operation2 함수 실행');
    return num2 + 1
  }
  const result2 = operation2()


  return (
    <>
      <h2>오버헤드 연산</h2>
      <input 
        type="text" 
        value={num1} 
        onChange={(e) => setnum1(Number(e.target.value))}
      />
      <div>{num1} + 1 = {result1}</div>

      <h2>일반 연산</h2>
      <input 
        type="text" 
        value={num2} 
        onChange={(e) => setnum2(Number(e.target.value))}
      />
      <div>{num2} + 1 = {result2}</div>
    </>
  )
}

export default BeforeUseMemo
