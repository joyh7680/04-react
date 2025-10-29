import React from 'react'
import { useContext } from 'react'
import { NameContext } from './NameShareApp2' //이 Context를 통해 상위 컴포넌트에서 내려준 상태(currentName)를 가져올 수 있음

function DisplayName2() { //화면(UI)에 현재 선택된 이름을 표시하는 역할

  //useContext(NameContext) 하위 컴포넌트들은 useContext(NameContext)로 이 데이터를 받아서 사용 가능

  //NameContext 객체를 구독해서 해당 컨텍스트에 저장된 내용을 꺼내서 사용
  const {currentName} =  useContext(NameContext) // {names : [], currentName: xxx, setCurrentName: xxx}


  return (
    <>
     <h2>현재 선택된 이름: {currentName}</h2> 
    </>
  )
}

export default DisplayName2

/*
useContext(NameContext)
React 훅(Hook) 문법
의미:"NameContext를 구독해서 그 안에 있는 값을 가져와라"
결과: NameContext.Provider의 value에 담긴 객체가 반환됨
*/

/*
{ currentName } = ...
자바스크립트 구조분해 할당(Destructuring assignment) 문법
의미:"객체에서 currentName 속성만 꺼내서 변수 currentName으로 저장하라"
*/