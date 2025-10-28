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

    let intervalId = null; // “아직 타이머를 시작하지 않았다”는 초기 상태를 나타내기 위해서
    //즉, 기본값으로 아무 타이머도 없는 상태.
     // let : 나중에 진짜 타이머 ID로 바뀜 -> 그래서 const가 아니라 let을 써야 해.
  
    if(isRunning){// 타이머 상태가 true일 때만 1초 간격마다 현재 초를 1씩 증가하는 타이머 설정
      intervalId = setInterval(() => {   //비동기 코드(setInterval)
      //  setInterval : 자바스크립트 내장 함수일정한 간격으로 반복 실행”하게 만들어주는 함수
        //setInterval 안의 콜백 함수는 시간이 지나서 나중에 실행됌
        //그런데 그 시점에서는 state 값이 이미 오래된(옛날) 값일 수 있음


        // console.log('생성된 interval의 콜백함수')
        // setSeconds(seconds + 1) => setSeconds(0+1) (클로저 캡쳐)
        setSeconds((prev) => prev + 1) 
        /*prev는 이전 상태값이야.
          즉, seconds의 최신 값이 아니라, React가 내부적으로 저장해둔 가장 최신 상태값을 가져와서 사용
          prev = React가 내부에서 관리하는 현재 상태값
          (prev) => prev + 1 = 함수형 업데이트 방식 (이전 값 → 새 값)*/
      }, 1000)
    } 

    //cleanup함수 : 컴포넌트가 Unmount (브라우저로부터 사라질때) 또는 useEffect의 setUp이 다시 실행되기 전
    return () => {
      console.log('clean up 함수 실행')
      //현재 생성된 타이머 정리 
      clearInterval(intervalId); //clearInterval: 원래 있는 자바스크립트 내장 함수
      //clearInterval(그ID) 하면 그 타이머를 정지시킴.
    };

  }, [isRunning]) //의존성 배열 [isRunning] → isRunning이 바뀔 때마다 실행

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
