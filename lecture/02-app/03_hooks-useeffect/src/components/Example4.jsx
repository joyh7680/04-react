import React, { useEffect, useState } from 'react'

function Example4() {

  //상태관리1) 타이머 시간 (초)
  const [seconds, setSeconds] = useState(0);

  // 상태관리 2) 타이머 상태
  const [isRunning, setIsRunning] = useState(false);


  //isRunning 상태 변경시마다 실행
  useEffect(()=> {
    //setup함수
    console.log('setup함수')

    let intervalId = null;
  
    if(isRunning){// 타이머 상태가 true일 때만 1초 간격마다 현재 초를 1씩 증가하는 타이머 설정
      intervalId = setInterval(() => {
        // console.log('생성된 interval의 콜백함수')
        // setSeconds(seconds + 1) => setSeconds(0+1) (클로저 캡쳐)
        setSeconds((prev) => prev + 1)
      }, 1000)
    } 

    //cleanup함수 : 컴포넌트가 Unmount (브라우저로부터 사라질때) 또는 useEffect의 setUp이 다시 실행되기 전
    return () => {
      console.log('clean up 함수 실행')
      //현재 생성된 타이머 정리 
      clearInterval(intervalId);
    };

  }, [isRunning])

  /* 
  타이머 정리하지 않았을 때의 문제점
  1. 정지상태 (false)로 변경되도 현재 타이머가 멈추지 않음
  2. 다시 실행상태(true)로 변경되면 타이머가 중복으로 실행됌 
  => 메모리 누수
  */

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
      {/* ? 삼항연산자 true : 실행중 / false : 정지됨 */}
      <p>
        상태: {isRunning ? '실행중' : '정지됨'}
      </p>
    </>
  )
}

export default Example4
