import React from 'react'
import { useState } from 'react';
import { useMemo } from 'react';

function AfterUseMemo() {
  console.log('컴포넌트가 렌더링됨...'); 

  const [num1, setnum1] = useState(0);
  const operation1 = () => {
    console.log('operation1 함수 실행');
    for (let i = 0; i < 1000000000; i++) {}
    return num1 + 1
  }
  // const result1 = operation1() 
  //operation1 함수 실행해서 result1 결과 받는건 num1이 변경될때만 수행시키자
  //() => {} 메모리상에 캐싱해둔다=저장해둔다
  const result1 = useMemo(() => {
    return operation1();
  }, [num1]);

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

export default AfterUseMemo
