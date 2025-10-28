import React, { useEffect, useState } from 'react'

function Example4() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=> {
    console.log('setup함수')

    let intervalId = null;
  
    if(isRunning){ //자바스크립트에서 if (조건) 은 조건이 true일 때만 실행
      intervalId = setInterval(() => {
        setSeconds((prev) => prev + 1)
      }, 1000)
    } 

    return () => {
      console.log('clean up 함수 실행')
      clearInterval(intervalId);
    };

  }, [isRunning])

  return (
    <>
      <h2>타이머</h2>
      <h3>{seconds}</h3>
      <button onClick={() => setIsRunning(true)} >시작</button>
      <button onClick={() => setIsRunning(false)}>중지</button>
      <button onClick={() => {
          setSeconds(0);
          setIsRunning(false);
      }}>초기화</button>
      <p>
        상태: {isRunning ? '실행중' : '정지됨'}
      </p>
    </>
  )
}

export default Example4

/* q )             --qqqqqqqqqqqqqqq         clear함수문의 
🔹 실행 흐름
1️ useEffect가 실행될 때
먼저 if(isRunning) 조건 검사
true → setInterval 실행 → intervalId에 타이머 ID 저장
false → setInterval 안 들어감 → intervalId는 여전히 null

2️ cleanup 함수 등록
return () => {...} 부분이 cleanup 함수임
이 함수는 나중에 React가 호출함

3️ cleanup 함수 실행 시점
이전 effect를 정리할 때 호출됨
컴포넌트가 unmount될 때
isRunning이 바뀌어서 useEffect가 다시 실행되기 직전
cleanup 내부에서 clearInterval(intervalId) 호출

intervalId가 null이면 아무 일 없음
intervalId가 setInterval ID면 해당 타이머 중지
*/