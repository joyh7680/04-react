import React from 'react'
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

function ObjecTypeExample() {

  console.log('해당 컴포넌트 렌더링됨..')
 
  //tv 객체와 아무 관계 없는 state
  const [inputValue, setInputValue] = useState('');
   //inputValue: input 태그에 들어있는 현재 값(=사용자가 입력한 값)
  //setInputValue() → input 내용 바뀔 때 호출

  //tv 객체와 연관이 있는 state
  //isSale: “할인 중인지 아닌지”를 나타내는 불리언 값 (true/false)
  // setIsSale() → 할인 여부를 변경할 때 호출
  const [isSale, setIsSale] = useState(false); 

  /* 컴포넌트 렌더링 시마다 매번 새로운 객체 생성 => 메모리 낭비
  // tv라는 객체에 세 가지 정보 저장 → 브랜드, 사이즈, 가격
  const tv = {
    brand:'samsung',
    size: 65,
    price: isSale ? '할인가 100만원' : '정가 200만원'
  }; 
  */
  /*price는 isSale 값에 따라 달라짐
  isSale === true → "할인가 100만원"
  isSale === false → "정가 200만원"
  즉, isSale이 바뀌면 tv.price도 같이 바뀜.*/

  //isSale 값이 변경될때만 새로운 객체 생성 
  const tv = useMemo(() => {
    return {
      brand:'samsung',
      size: 65,
      price: isSale ? '할인가 100만원' : '정가 200만원'
    }
  }, [isSale])

  //useEffect 실행 시점:첫 렌더링 직후 1회, tv 내용이 달라질 때마다 실행
  useEffect(() => {
    console.log('현재 tv객체 정보:', tv)
  }, [tv]) // 의존성 배열 [tv] → tv 객체가 “변경될 때만” 실행돼.

  //화면 구성
  return ( 
    <>
    {/* input → inputValue 상태를 보여주고, 바뀌면 setInputValue로 상태 업데이트*/}
      <input  type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      <br />
      {/* button → 클릭 시 isSale을 반전시켜서 true/false 토글 */}
      <button onClick={() => setIsSale(!isSale)}>할인 여부 변경</button>
    </>
  )
}

export default ObjecTypeExample

/* 주의: 객체는 “항상 새로운 참조값”을 가짐
tv는 매 렌더링마다 const tv = {...}로 새로 만들어지기 때문에,
리액트 입장에서는 “tv가 항상 새 객체로 변경됨”이라고 판단해.
그래서 사실상 매번 useEffect가 실행돼. */

/* isSale이 불리언(boolean) 값인 이유
const [isSale, setIsSale] = useState(false);
여기서 useState(false) 부분을 보면, 초기값이 false야.
👉 자바스크립트에서 true / false는 불리언(boolean) 타입이지.
그래서 isSale은 boolean 상태 변수가 되는 거야.
true → "할인 중"
false → "정가 판매 중" */

/* 버튼 클릭 시 isSale을 반전(toggle)하는 부분
<button onClick={() => setIsSale(!isSale)}>할인 여부 변경</button>
!isSale 은 논리 반전 연산자야.
!true → false
!false → true

즉,버튼을 클릭할 때마다

이전 상태	클릭 후 상태
false (정가)	true (할인 중)
true (할인 중)	false (정가)

이걸 "토글(toggle)" */

/*
useMemo란?
useMemo는 메모이제이션(Memoization) 훅이야.
역할: “값을 계산하고 저장해두고, 의존성이 바뀔 때만 다시 계산”
즉, 불필요하게 객체를 새로 만들지 않도록 최적화해 줌.
*/